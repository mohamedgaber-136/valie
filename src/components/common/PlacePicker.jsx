import { locations } from "@/data/locations";
import { useAddItemMutation, useGetItemsQuery } from "@/Redux/api";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PlacePicker() {
  const [isActive, setIsActive] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(
    locations[0].placeName
  );
  const [favorites, setFavorites] = useState([]); // Track favorite location IDs
  const inputRef = useRef();
const {accessToken} = useSelector((state)=>state.auth)

  const [addItem] = useAddItemMutation();
const navigate = useNavigate()
  // Fetch items from the endpoint 'user/profile'
  const { data, refetch } = useGetItemsQuery("user/profile");
  useEffect(() => {
    // Populate favorites based on data.data.savedPlaces when the data is available
    if (data?.data?.savedPlaces) {
      setFavorites(data.data.savedPlaces);
    }
  }, [data]);

  const addInactive = (event) => {
    if (!inputRef.current?.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", addInactive);
    return () => {
      document.removeEventListener("click", addInactive);
    };
  }, []);
  // Toggle favorite status for a location
  const toggleFavorite = async (placeName, id) => {
    const endpoint = "user/fav-place";
if(accessToken==null){
  navigate('/login')
}else{
  try {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id) // Remove from favorites
        : [...prevFavorites, id] // Add to favorites
    );
    await addItem({
      endpoint: endpoint,
      newItem: { _method: "put", locationID: id },
    }).unwrap();

    // Update favorites locally
  

    // Optionally refetch to sync with server
    refetch();
  } catch (err) {
    console.error("Error updating favorite:", err);
  }
}
 
  };

  // Sort locations to place favorites at the top
  const sortedLocations = [...locations].sort((a, b) => {
    const aIsFavorite = favorites.includes(a.id);
    const bIsFavorite = favorites.includes(b.id);

    if (aIsFavorite && !bIsFavorite) return -1; // a comes first
    if (!aIsFavorite && bIsFavorite) return 1; // b comes first
    return 0; // No change in order
  });

  return (
    <>
      <input
        ref={inputRef}
        className="search-input dropdown-location"
        onClick={() => setIsActive((prev) => !prev)}
        type="text"
        placeholder=""
        value={selectedLocation}
        readOnly
      />
      <div
        className="box-dropdown-location"
        style={isActive ? { display: "block" } : { display: "none" }}
      >
        <div className="list-locations ">
          {sortedLocations.map((elm, i) => (
            <div
              key={i}
              onClick={() => setSelectedLocation(elm.placeName)}
              className="item-location  align-items-center "
            >
              <div className="location-icon">
                <img src={elm.icon} alt="luxride" />
              </div>
              <div className="location-info">
                <h6 className="text-16-medium color-text title-location">
                  {elm.placeName}
                </h6>
                <p className="text-14 color-grey searchLocations">
                  {elm.location}
                </p>
              </div>
              {/* Toggle star for favorites */}
              <div
                className="favorite-icon "
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the location selection
                  toggleFavorite(elm.placeName, elm.id);
                }}
                style={{ cursor: "pointer" }}
              >
                {favorites.includes(elm.id) ? (
                  <span style={{ color: "gold", fontSize: "24px" }}>★</span> // Gold star for saved places
                ) : (
                  <span style={{ color: "gray", fontSize: "24px" }}>☆</span> // Gray star for others
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
