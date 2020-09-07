import React from 'react';
import { Component } from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import Check from './Check';
import { Multiselect } from 'multiselect-react-dropdown';




/** Filter component responsible for updating search with tag parameters */
class Filter extends Component {

  constructor() {
    super()
    this.og_state = { //look at Check's prop called tagVar
      consulting: false,
      ncproject: false,
      cultural: false,
      competition: false,
      performance: false,
      activism: false,
      service: false,
      discussion: false,
      media: false,

      Lessthan20: false,
      twentyfifty: false,
      fiftyhundred: false,
      Morethan100: false,

      dropdown: [
        { name: "Linguistic", group: "1", selected: false },
        { name: "Underrepresented minorities", group: "1", selected: false },
        { name: "Ethnic", group: "1", selected: false },
        { name: "Religious", group: "1", selected: false },
        { name: "LGBTQ+", group: "1", selected: false },

        { name: "Environmental", group: "2", selected: false },
        { name: "Sustainability", group: "2", selected: false },
        { name: "Animal", group: "2", selected: false },

        { name: "Debate", group: "3", selected: false },
        { name: "Law", group: "3", selected: false },
        { name: "Diplomatic", group: "3", selected: false },
        { name: "Public Policy", group: "3", selected: false },
        { name: "Speech", group: "3", selected: false },
        { name: "Advocacy", group: "3", selected: false },

        { name: "Scientific", group: "4", selected: false },
        { name: "STEM", group: "4", selected: false },
        { name: "Engineering (Chemical, Bio, Civil)", group: "4", selected: false },

        { name: "Non-profit", group: "5", selected: false },
        { name: "Educational", group: "5", selected: false },
        { name: "Research", group: "5", selected: false },
        { name: "Women Interest", group: "5", selected: false },
        { name: "Apprenticeship", group: "5", selected: false },

        { name: "Professional - Development", group: "6", selected: false },
        { name: "Career - Development", group: "6", selected: false },
        { name: "Academic - Development", group: "6", selected: false },

        { name: "Mentorship", group: "7", selected: false },
        { name: "Mental Health", group: "7", selected: false },

        { name: "Review", group: "8", selected: false },
        { name: "Journalism", group: "8", selected: false },
        { name: "Documenting", group: "8", selected: false },

        { name: "Music", group: "9", selected: false },
        { name: "Photography", group: "9", selected: false },
        { name: "Art", group: "9", selected: false },
        { name: "Fashion", group: "9", selected: false },
        { name: "Dance", group: "9", selected: false },
        { name: "Film", group: "9", selected: false },
        { name: "Literature", group: "9", selected: false },

        { name: "Data Science", group: "10", selected: false },
        { name: "Computer Science", group: "10", selected: false },
        { name: "Web development", group: "10", selected: false },
        { name: "Hackathon", group: "10", selected: false },

        { name: "Major-oriented", group: "11", selected: false },
        { name: "College-oriented", group: "11", selected: false },

        { name: "Entrepreneurship", group: "12", selected: false },
        { name: "Finance", group: "12", selected: false },
        { name: "Management", group: "12", selected: false },

        { name: "Robotics", group: "13", selected: false },
        { name: "Automobile", group: "13", selected: false },
        { name: "Aerospace", group: "13", selected: false },

      ],
      tagList: [],
    };

    this.state = Object.assign(this.og_state);

    this.filterCheckBoxEventHandler = this.filterCheckBoxEventHandler.bind(this);
    this.dropdownSelectHandler = this.dropdownSelectHandler.bind(this)
    this.onReset = this.onReset.bind(this);
  }

  filterCheckBoxEventHandler(event, currBool) {
    // console.log(this.state)
    this.setState({ [event.target.name]: !currBool })
    if (!currBool && !this.state.tagList.includes(event.target.name)) {
      this.state.tagList.push(event.target.name)
    }
    if (!currBool == false && this.state.tagList.includes(event.target.name)) {
      const index = this.state.tagList.indexOf(event.target.name)
      this.state.tagList.splice(index, 1)
    }
    // console.log(this.state.tagList)
    this.props.filterParentUpdate(this.state.tagList)
  }

  dropdownSelectHandler(selectedList, selectedItem) {
    let currBool;

    this.setState({
      dropdown: this.state.dropdown.map(
        (item) => {

          if (item.name == selectedItem.name) {
            console.log(item.selected);
            currBool = item.selected;
            return { name: item.name, selected: !item.selected }
          } else {
            return item;
          }
        }
      )

    })

    if (!currBool && !this.state.tagList.includes(selectedItem.name)) {
      this.state.tagList.push(selectedItem.name)
    }
    if (!currBool == false && this.state.tagList.includes(selectedItem.name)) {
      const index = this.state.tagList.indexOf(selectedItem.name)
      this.state.tagList.splice(index, 1)
    }
    // console.log(this.state.tagList)
    this.props.filterParentUpdate(this.state.tagList)
  }

  onReset(e) {
    this.props.filterParentUpdate([]);
    this.props.parentUpdateCB("");
    this.setState(Object.assign(this.og_state));
  }

  render() {
    // this.foi = [
    //   {"foi1"},

    // ]

    return ( // For <Check>, tagName is displayed!

      <div className="filter-section">
        <div className="boxes myFilter">

          <h3>Field of Interest</h3>
          <Multiselect
            options={this.state.dropdown}
            displayValue="name"
            closeOnSelect={false}
            onSelect={this.dropdownSelectHandler}
            onRemove={this.dropdownSelectHandler}
            groupBy="group"
          />

          <h3>What Type of Activity?</h3>

          <Check eHandler={this.filterCheckBoxEventHandler} key="consulting" tagName="Consulting/Client Project" tagVar="consulting" tagBool={this.state.consulting} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="ncproject" tagName="Non-Client Project" tagVar="ncproject" tagBool={this.state.ncproject} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="cultural" tagName="Cultural" tagVar="cultural" tagBool={this.state.cultural} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="competition" tagName="Competition" tagVar="competition" tagBool={this.state.competition} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="performance" tagName="Performance" tagVar="performance" tagBool={this.state.performance} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="activism" tagName="Activism" tagVar="activism" tagBool={this.state.activism} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="sports" tagName="sports/Recreation" tagVar="sports" tagBool={this.state.sports} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="service" tagName="service" tagVar="service" tagBool={this.state.service} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="discussion" tagName="discussion" tagVar="discussion" tagBool={this.state.discussion} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="media" tagName="media/Publication" tagVar="media" tagBool={this.state.media} />

          <h3>Org Size</h3>
          <Check eHandler={this.filterCheckBoxEventHandler} key="Lessthan20" tagName="Less than 20 members" tagVar="Lessthan20" tagBool={this.state.Lessthan20} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="twentyfifty" tagName="20-50 members" tagVar="twentyfifty" tagBool={this.state.twentyfifty} />
          <Check eHandler={this.filterCheckBoxEventHandler} key="fiftyhundred" tagName="50-100 members" tagVar="fiftyhundred" tagBool={this.state.fiftyhundred} /> 
          <Check eHandler={this.filterCheckBoxEventHandler} key="Morethan100" tagName="More than 100 members" tagVar="Morethan100" tagBool={this.state.Morethan100} />

          <br />

          <p>*Click on the search icon to apply filters.</p>

          <div className="resetButtonWrapper"><button onClick={this.onReset} className="resetButton"> Reset Filters </button></div>
        </div>

      </div>
    );
  }
}




export default Filter;
