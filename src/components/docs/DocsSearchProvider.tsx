import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

type DocsSearchContextValue = {
  query: string;
  setQuery: (value: string) => void;
  submitSearch: (value: string) => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  focusSearch: () => void;
  isDocsPage: boolean;
};

const DocsSearchContext = createContext<DocsSearchContextValue | null>(null);

export function DocsSearchProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isDocsPage = location.pathname === "/docs";

  const queryFromUrl = isDocsPage ? (searchParams.get("q") ?? "") : "";
  const [query, setQueryState] = useState(queryFromUrl);

  useEffect(() => {
    setQueryState(queryFromUrl);
  }, [queryFromUrl]);

  const submitSearch = useCallback(
    (value: string) => {
      setQueryState(value);
      const next = value.trim()
        ? `/docs?q=${encodeURIComponent(value.trim())}`
        : "/docs";
      navigate(next);
    },
    [navigate],
  );

  const setQuery = useCallback(
    (value: string) => {
      setQueryState(value);
      submitSearch(value);
    },
    [submitSearch],
  );

  const focusSearch = useCallback(() => {
    if (!isDocsPage) {
      navigate(`/docs${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`);
    }
    requestAnimationFrame(() => {
      searchInputRef.current?.focus();
      searchInputRef.current?.select();
    });
  }, [isDocsPage, navigate, query]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        focusSearch();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [focusSearch]);

  const value = useMemo(
    () => ({
      query,
      setQuery,
      submitSearch,
      searchInputRef,
      focusSearch,
      isDocsPage,
    }),
    [query, setQuery, submitSearch, focusSearch, isDocsPage],
  );

  return (
    <DocsSearchContext.Provider value={value}>{children}</DocsSearchContext.Provider>
  );
}

export function useDocsSearch() {
  const context = useContext(DocsSearchContext);
  if (!context) {
    throw new Error("useDocsSearch must be used within DocsSearchProvider");
  }
  return context;
}
