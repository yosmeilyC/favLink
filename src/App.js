import React from 'react'
import LinkContainer from './components/LinkContainer'

function App() {

  const [links, setLinks] = useState([]);


  useEffect(() => {
    // Fetch initial data when the component mounts
    getLinks();
  }, []);

  const getLinks = async () => {
    try {
      const response = await fetch('/api/links');
      const data = await response.json();
      setLinks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const createLink = async (newLink) => {
    try {
      const response = await fetch('/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLink),
      });
      const data = await response.json();
      setLinks([...links, data]); // Update state with the new link
    } catch (error) {
      console.error(error);
    }
  };

  const deleteLink = async (linkId) => {
    try {
      await fetch(`/api/links/${linkId}`, {
        method: 'DELETE',
      });
      setLinks(links.filter((link) => link.id !== linkId)); // Remove the deleted link from state
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <LinkContainer />
    </div>
  )
}

export default App
