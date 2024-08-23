import React, { useState } from "react";
import useConversation from "../../zustand/useConversation"; // Ensure correct import
import useGetConversation from "../../hooks/useGetConversation"; // Ensure correct import
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const [search, setSearch] = useState(""); // Initialize search state as an empty string
  const { setSelectedConversation } = useConversation();
  const { conversation } = useGetConversation(); // Correctly call the hook as a function

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return; // Ensure search is not empty
    if (search.length < 3) {
      return toast.error("Search character must be at least 3");
    }

    // Ensure conversation is an array
    if (!Array.isArray(conversation)) {
      return toast.error("No conversations available");
    }

    console.log("Search query:", search); // Debugging line
    console.log("Conversations:", conversation); // Debugging line

    // Normalize search term and conversation names to lowercase for comparison
    const foundConversation = conversation.find((s) => {
      const fullName = s.fullName ? s.fullName.toLowerCase() : ""; // Safeguard with fallback
      const searchTerm = search.toLowerCase();
      console.log("Comparing:", fullName, "with", searchTerm); // Debugging line
      return fullName.includes(searchTerm);
    });

    if (foundConversation) {
      setSelectedConversation(foundConversation);
      setSearch(""); // Clear the search input after finding the conversation
    } else {
      toast.error("No User Found");
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Search"
      className="input input-bordered rounded-full"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
    />
    <button
      type="submit"
      className="btn btn-circle font-extrabold  bg-sky-500 text-white"
    >
      <CiSearch className="h-6 w-6 outline-none" />
    </button>
  </form>
  );
};

export default SearchInput;
