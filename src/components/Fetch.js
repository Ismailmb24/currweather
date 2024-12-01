import { useFetch } from "../custom/usefetch";

export default function Fetch({
  url,
  loadingFallback = null,
  RenderError = null,
  renderSuccess,
}) {
  const [data, loading, error] = useFetch(url);

  if (loading) return loadingFallback;

  if (error) return RenderError;

  return renderSuccess({ data });
}
