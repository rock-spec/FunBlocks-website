// Function to safely render HTML string
export const renderHTML = (htmlString: any) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};