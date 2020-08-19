import React, {useState} from 'react';
import Sidebar from './Sidebar';
import './layout.scss';
import './style.scss';
import Tiles from "./Tiles";


function Index() {
    // Placeholder for REST API; remove contents when implementing back-end.
    const [state, setState] = useState({
        stories: [
            {
                name: "name1",
                story: 'story1 Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero'
            },
            {
                name: 'name2',
                story: 'story2 Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero'
            },
            {
                name: 'name3',
                story: 'story1 Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero'
            },
            {
                name: 'name4',
                story: 'story1 Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero'
            },
            {
                name: 'name5',
                story: 'story1 Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero'
            },
            {
                name: 'name6',
                story: 'story1 Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero'
            },
            {
                name: 'name7',
                story: 'story1 Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero'
            },
        ]
    })

    return (
        <div className="story--main">
            <Sidebar />
            <div className="story--body">
                <h1 className="story--heading">Stories</h1>
                <Tiles stories={state.stories} />
            </div>
        </div>
    )
}



export default Index
