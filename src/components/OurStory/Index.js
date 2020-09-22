import React from 'react';
import Sidebar from './Sidebar';
import './layout.scss';
import './style.scss';
import Header from '../Header/Header';
import Tile from './Tile';
import InfiniteScroll from "react-infinite-scroll-component";



class Index extends React.Component {
    constructor(props) {
        super()
        this.state = {
            stories: [
                // { // base: required fields
                //     id: "id1", //whatever works
                //     name: "name1",
                //     year: "year1", // string (freshmen, junior, etc)
                //     major: "major1",
                //     storyType: "academics", // string (either "academics", "transition", "student orgs") 

                //     // academics
                //     email: "email1",
                //     college: "college1",
                //     gpareq: "gpareq1",
                //     prereq: "prereq1",
                //     tips: "tips1",
                //     rigor: "rigor1",
                // },
                // { // base: required fields
                //     id: "id2", //whatever works
                //     name: "name1",
                //     year: "year1", // string (freshmen, junior, etc)
                //     major: "major1",
                //     storyType: "transition", // string (either "academics", "transition", "clubs", "apps") 

                //     // transition
                //     residency: "in-state", // either "in-state", "out-of-state", or "international"
                //     feel: "feel1",
                //     emo: "emo1",
                //     concern: "concern1",
                //     challenge: "challenge1",
                // },
                // { // base: required fields
                //     id: "id3", //whatever works
                //     name: "name1",
                //     year: "year1", // string (freshmen, junior, etc)
                //     major: "major1",
                //     storyType: "student orgs", // string (either "academics", "transition", "clubs", "apps") 

                //     // club
                //     clubs: "clubs1",
                //     transition: "transition1",
                //     proscons: "proscons1",
                //     balance: "balance1",
                //     type: "clubs",
                // },
                // { // base: required fields
                //     id: "id4", //whatever works
                //     name: "name1",
                //     year: "year1", // string (freshmen, junior, etc)
                //     major: "major1",
                //     storyType: "student orgs", // string (either "academics", "transition", "clubs", "apps") 

                //     // app
                //     factors: "factors1",
                //     cope: "cope1",
                //     advice: "advice1",
                //     pic: "pic1",
                //     type: "apps",
                // },
            ],
            loadPage: 0, // 0 if fresh, 1 is first extra fetch
            numItemsTotal: 17, //FIXME fetch this number
            hasMore: true,
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.loadMore = this.loadMore.bind(this);

    }

    fetchPage(pageNum) {
        console.log("fetch" + pageNum)
        fetch(`https://bearbeginnings.club:8444/`) // + pageNum)
            .then(response => response.json())
            .then(result => {
                 this.setState({ stories: this.state.stories.concat(result) }) //for debug use: , () => console.log(this.state.stories)

                // if (pageNum==0) { //FIXME diags pre-backend-work
                //     this.setState({ stories: result.slice(0, 17) })
                // } else if (pageNum==1) {
                //     this.setState({ stories: this.state.stories.concat(result.slice(17, 34))})
                // }
                // console.log(this.state.stories)
            })
    }

    loadMore() {
        if (this.state.stories.length > this.state.numItemsTotal) {
          this.setState({
            hasMore: false
          })
          return;
        }
        let nextPage = this.state.loadPage + 1;
        this.setState({
          loadPage: nextPage,
        }, () => { this.fetchPage(nextPage) }
        )
      }

    componentDidMount() {
        this.fetchPage(0);
    }


    render() {
        this.mappedStories = this.state.stories.map(story => {
            return <Tile key={story.id} story={story} />
        })

        return (
            <div className="AppChild">
                <Header isLanding={false} />
                <div className="story--main">
                    <Sidebar />
                    <div className="story--body">
                        <h1 className="story--heading"></h1>
                        <InfiniteScroll
                            className="allTiles"
                            dataLength={this.state.stories.length}
                            next={this.loadMore}
                            hasMore={this.state.hasMore}
                            loader={<h4 className="infinite-loading"></h4>}
                            endMessage={<p></p>}
                        >
                            {this.mappedStories}
                        </InfiniteScroll>
                    </div>
                </div>
            </div>
        )
    }
}



export default Index
