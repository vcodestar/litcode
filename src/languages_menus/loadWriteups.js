export const loadWriteups = (writeups, languageFolder) => {
    const linkPromises = Object.keys(writeups).map(async (filePath) => {
      const label = filePath.split("/").pop().replace(".jsx", "");
  
      try {
        // Dynamically import the component using the import function
        const component = await writeups[filePath]();  // Ensure we're calling the function to resolve the component
  
        return {
          path: `/writeups/${languageFolder}/${label}`,
          label: label.replace(/[-_]/g, " ").toUpperCase(),
          component: component, // Dynamically loaded component
        };
      } catch (error) {
        console.error(`Error loading writeup: ${label}`, error);
      }
    });
  
    return Promise.all(linkPromises); // Resolve all promises
  };
  