export function truncateNames():void {
  const subscriptElements = document.getElementsByTagName("sub");
  const subscriptElementsArray = Array.from(subscriptElements);
  if (subscriptElementsArray !== null) {
    subscriptElementsArray.forEach((subscriptElement) => {
      const wordLength = subscriptElement?.textContent?.length || 0;
      if (wordLength === 0) return; // Skip elements without text content
      if (wordLength > 13) {
        subscriptElement.innerHTML = "<b>" + subscriptElement?.textContent?.substr(0, 10) + "..." + "</b>";
      }   
    })
  } 
}