import React, { Component } from 'react';

class Gallery extends Component {  //Fetch tour data from the API and display it dynamically.
  constructor(props) {
    super(props);
    this.state = {
      tours: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() { //Allow users to interact with the tour list through buttons and toggle functionality.
    this.fetchTours();
  }

  fetchTours = async () => {
    this.setState({ loading: true });
    try {
      const response = await fetch('https://course-api.com/react-tours-project'); //Use the API endpoint to fetch tour data when the component mounts using useEffect.
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      this.setState({ tours: data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  removeTour = (id) => {
    this.setState((prevState) => ({
      tours: prevState.tours.filter((tour) => tour.id !== id),
    }));
  };

  toggleDescription = (id) => {
    this.setState((prevState) => ({
      tours: prevState.tours.map((tour) => // map() function to render a list of tours.
        tour.id === id ? { ...tour, showMore: !tour.showMore } : tour
      ),
    }));
  };

  render() { //Display a loading message while fetching data.
    const { tours, loading, error } = this.state;

    if (loading) {
      return <p>Loading tours...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;  // Handle and display an error message if the fetch fails.
    }

    if (tours.length === 0) {
      return <p>No tours left to display.</p>;
    }

    return ( 
      <div className="gallery-container">
        {tours.map(({ id, name, price, info, image, showMore }) => (
          <div key={id} className="tour-card">
            <img src={image} alt={name} className="tour-image" />
            <div className="tour-info">
              <h2>{name}</h2>
              <p className="tour-price">${price}</p>
              <p className="tour-description">
                {showMore ? info : `${info.substring(0, 100)}...`}
                <button onClick={() => this.toggleDescription(id)}>
                  {showMore ? 'Show Less' : 'Read More'}
                </button>
              </p>
              <button
                className="Not-Interested" //"Not Interested" button to remove a tour from the list.
                onClick={() => this.removeTour(id)}
              >
                Not Interested
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Gallery;
