import {React , Component} from 'react'
import { ReactDOM  } from 'react'
import {SingleNews} from './SingleNews'

class News extends React.Component{

    renderItems(){
        return this.props.items.map((item)=>
        <SingleNews key={item.id} item={item} />
        );
    }

    render(){
        return (

            <Ui>
                {this.renderItems()}
            </Ui>
        )
    }


}
export default News