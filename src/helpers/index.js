export const getImg = url => {
  let newUrl;

  try {
    newUrl = require(`../assets/images/${url}.jpg`);
  } catch (err) {
    newUrl = '';
  }

  return newUrl;
};

export const getUnicalSyhmbols = allSymbolds => {
  return allSymbolds.reduce((previous, currentSymbol) => {
    if (
      previous.filter(symbol => symbol.value === currentSymbol.value).length ===
      0
    ) {
      return [...previous, currentSymbol];
    }
    return previous;
  }, []);
};

export const createSearchRequest = (
  dateFilter,
  popularFilter,
  selectSymbols
) => {
  const isHasFilter = dateFilter || popularFilter || selectSymbols.length > 0;
  let searchRequest = `/api/fonts/${isHasFilter ? '?' : ''}`;
  const getOrderingFilterRequest = request =>
    popularFilter || dateFilter
      ? `${request}ordering=${
          dateFilter ? 'font__created_at&' : '-likes_count&'
        }&`
      : request;
  const getSymbolFilterRequest = request =>
    selectSymbols.length > 0
      ? `${request}content_contains=${selectSymbols}`
      : request;
  return getSymbolFilterRequest(getOrderingFilterRequest(searchRequest));
};
