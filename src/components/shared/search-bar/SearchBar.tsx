"use client";
import React, { ChangeEvent, useState } from "react";
import TextInputLabel from "../text-input-label/TextInputLabel";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { debounce } from "lodash";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") ?? ""
  );
  const pathName = usePathname();
  const { replace } = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>): any => {
    const params = new URLSearchParams(searchParams);
    const input = e.currentTarget.value;
    setSearchQuery(input);
    params.set("query", input);
    if (!input) {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div>
      <TextInputLabel
        label=""
        placeholder="Enter a search term"
        onChange={(e) => {
          debounce(() => {
            onChange(e);
          });
        }}
        value={searchQuery}
      />
    </div>
  );
};

export default SearchBar;
