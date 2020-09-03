import React from 'react';
import { Component } from 'react';
import './style.scss';
import './layout.scss';
import axios from 'axios';
import Header from '../Header/Header';
import Search from './searchComponent/Search';
import Filter from './filterComponent/Filter';
import Sort from './sortComponent/Sort';
import ClubComponent from './ClubComponent';
import PageNavigation from './PageNavigation';
import ClubCard from './resultComponent/clubCardComponent/clubCard'


class App extends Component {
  constructor() {
    super()
    this.state = {
      organizations: [
        {
          abbrevName: 'aaa',
          clubEmail: 'aaa@aa.com',
          experience: 'blablabla experience',
          id: '81264916824721074124',
          intro: 'blabla intro here Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
          logo: '',
          name: 'Big Boi CLub',
          repreEmail: 'repre@email.com',
          repreName: 'Repre Smith',
          size: 'less than 420 members',
          sizeTags: 2,
          socialMedia: null,
          tags: ["#Business Management #Technology"],
          yTLink: 'www.youtube.aaa'
        },
        {
          abbrevName: 'bbb',
          clubEmail: 'bbb@aa.com',
          experience: 'blablabla experience',
          id: '24523451254214',
          intro: 'blabla intro here',
          logo: '',
          name: 'Big Boi CLub The Sequel',
          repreEmail: 'repre2@email.com',
          repreName: 'Repre2 Smith',
          size: 'less than 4202 members',
          sizeTags: 2,
          socialMedia: null,
          tags: ["#Business #Technology"],
          yTLink: 'www.youtube.aaa'
        },
      ],
      searchDisplayName:"",
      tagList:[],
      totalResults: 0,
    totalPages: 0,
    currentPageNo: 0,
    }
  this.componentDidMount = this.componentDidMount.bind(this)
  this.updateSearchKey = this.updateSearchKey.bind(this)
  this.updateTagState = this.updateTagState.bind(this)
  this.fetchSearchData=this.fetchSearchData.bind(this)
  

  }

  getPagesCount = (total, denominator) => {
  const divisible = total % denominator === 0;
  const valueToBeAdded = divisible ? 0 : 1;

  return Math.floor(total / denominator) + valueToBeAdded;
};

handlePageClick = (type) => {
  event.preventDefault();
  const updatedPageNo =
          'prev' === type
            ? this.state.currentPageNo - 1
            : this.state.currentPageNo + 1;
  if (!this.state.loading) {
    this.setState({ loading: true, message: '' }, () => {
      // Fetch previous 20 Results
      this.fetchSearchResults(updatedPageNo, this.state.query);
    });
  }
};

const { query, loading, message, currentPageNo, totalPages } = this.state;
// showPrevLink will be false, when on the 1st page, hence Prev link be shown on 1st page.
const showPrevLink = 1 < currentPageNo;
// showNextLink will be false, when on the last page, hence Next link wont be shown last page.
const showNextLink = totalPages > currentPageNo;

  //Updated TagList 
  updateTagState(updatedTags) {
    this.setState(
      {tagList: updatedTags}
      )
  }

  //Updating Organizations
  updateSearchKey(name) {
    //console.log("Name is ", name)
      this.setState(
        {
          searchDisplayName: name
        }, () => {this.fetchSearchData(this.state.searchDisplayName, this.state.tagList)}
      )
      //Sends the fetch call here once the searchKey and tagList are updated - tagList gets updated real time FYI, while
      // the searchKey gets updated once we click the button, which is when we should also send API request, causing component
      // to rerender
      //console.log("Before fetch method, the skey is ", this.state.searchDisplayName)
      

  }

  //The fetch call to backend Search API
  //CORS error being thrown for some reason? - Will get fixed once we host everything somewhere
  fetchSearchData(searchName, tagParams) {
    //Need to alter logic here such the right API can be chosen
    /**
     * Case 1 - SearchKey only, no tagList
     * Case 2 - SearchKey and tagList of size x
     * Case 3 - No SearchKey and tagList of size x only
     */
    //console.log("Calling fetchSearchData to consume backend API")
    //console.log(searchName.length)
    //console.log(tagParams.length)

    axios.get(searchUrl, {
    cancelToken: this.cancel.token,
  })
  .then((res) => {
    const total = res.data.total;
    const totalPagesCount = this.getPagesCount( total, 20 );
    const resultNotFoundMsg = !res.data.hits.length
      ? 'There are no more search results. Please try a new search.'
      : '';
    this.setState({
      results: res.data.hits,
      totalResults: res.data.total,
      currentPageNo: updatedPageNo,
      totalPages: totalPagesCount,
      message: resultNotFoundMsg,
      loading: false,
    });
  })

    //Case 1
    if(searchName.length>0 && tagParams.length==0) {
      fetch(`http://157.245.228.180:8081/searchByName/` + searchName)
    .then(response => 
      response.json())
    .then(result => {
      this.setState({organizations: result}, () => console.log(this.state.organizations))
      
      
  })
    }

    //Case 2
    else if(searchName.length >0 && tagParams.length>0) {
      let accumulator = ""
      console.log(tagParams)
      for (let tag in tagParams) {
        accumulator += "(" + tagParams[tag] + ")"
      }
      //Send API call using this string separated by pattern
      console.log("Case 2 triggered")
      

      
      fetch(`http://157.245.228.180:8081/searchTagsAndKey/` + searchName + "/"
      + accumulator)
      .then(response => response.json())
      .then(result =>{
        this.setState({organizations: result})
        console.log(this.state.organizations)
      })
    }

    //Case 3
    else if(searchName.length == 0 && tagParams.length>0) {
      let accumulator = ""
      for (let tag in tagParams) {
        accumulator += "(" + tagParams[tag] + ")"
        
      }
      console.log("Case 3 triggered")
      console.log(accumulator)
      //console.log(this.state.searchDisplayName)
      fetch(`http://157.245.228.180:8081/searchMultipleTags/` + accumulator)
      .then(response => response.json())
      .then(result =>{
        this.setState({organizations: result})
        console.log(this.state.organizations)
      })    
    }


    
}

  async componentDidMount() {
    // console.log("Should happen once!")
    await fetch(`http://157.245.228.180:8081/getClubData`)
      .then(response =>
        response.json())
      .then(result => 
        {
        this.setState({
          organizations: result
        }, () => console.log(this.state.organizations))
      }
      )
    //console.log(this.state.organizations)
  }



  render() {
    /** Call fetch function here */
   
    const mappedClubs = this.state.organizations.map(item => (
      <ClubCard key={item.id} org={item}/> //fixme var imports
    ))
    

    return (
      <div className="AppChild">
        <Header isLanding={false} />
        <div className="AppChild">
          
          <div className="big-flex">
            <div className='vs--sidebar'>
              <div className="welcome-message">
              <Search parentUpdateCB = {this.updateSearchKey} />
                <h1>Welcome to Virtual Sproul</h1> 
                <h3>Start looking for the student orgs you're interested in!</h3>
              </div>
              
              <Filter filterParentUpdate = {this.updateTagState} parentUpdateCB = {this.updateSearchKey} />
              {/* <Sort /> */}
            </div>
  
            <div className="vs--main">
              
              <ClubComponent clubArray={mappedClubs} />
            </div>
          </div>
  
          {/** This part should rerender based off the search results! */ }
  
          {/**Conditional rendering should be done here to display "Search results for XYZ when search button is clicked" */}
  {/*Navigation Top*/}
<PageNavigation
  loading={loading}
  showPrevLink={showPrevLink}
  showNextLink={showNextLink}
  handlePrevClick={() => this.handlePageClick('prev')}
  handleNextClick={() => this.handlePageClick('next')}
/>


          {this.state.searchDisplayName.length != 0 && //fixme
            <h1> Search Results for {this.state.searchDisplayName}</h1>
          }

  {/*Navigation Bottom*/}
<PageNavigation
  loading={loading}
  showPrevLink={showPrevLink}
  showNextLink={showNextLink}
  handlePrevClick={() => this.handlePageClick('prev')}
  handleNextClick={() => this.handlePageClick('next')}
/>
        </div>
      </div>
    );


  }
}

export default App;