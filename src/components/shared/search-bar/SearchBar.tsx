"use client";
import React, { ChangeEvent, useCallback, useState } from "react";
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

  const changesParams = (input: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("query", input);
    if (!input) {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeParams = useCallback(debounce(changesParams, 1000), []);

  const onChange = (e: ChangeEvent<HTMLInputElement>): any => {
    const input = e.currentTarget.value;
    setSearchQuery(input);
    debouncedChangeParams(input);
  };

  return (
    <div>
      <TextInputLabel
        label=""
        placeholder="Enter a search term"
        onChange={onChange}
        value={searchQuery}
      />
    </div>
  );
};

export default SearchBar;
