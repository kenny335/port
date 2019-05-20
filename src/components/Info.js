import React from "react";
import $ from "jquery";

class Info extends React.Component{

    state={
        isVisible:false,
        buttonText:"reveal"
    }

        here=()=> {
            const isVisible=this.state.isVisible;
            if(this.state.isVisible===true) {
                $(".here").fadeOut(2000);
            } 
           if(this.state.isVisible===false) {
               $(".here").fadeIn(2000);
           }
           this.setState({isVisible:!isVisible})
           this.setState({buttonText:"Close"})
        }
    render() {
        return(
            <div style={{height:"100%", backgroundColor:"black", width:"102%", color:"white", marginTop:"200px"}}>
          <div style={{height:100, display:"flex", flexDirection:"row", justifyContent:"space-evenly", marginTop:200}}>
          <div>
              <p className="here">Here</p>
            <button onClick={this.here}class="btn btn-success">{this.state.buttonText}</button>
          </div>
          <div>
              <p>I</p>
            <button class="btn btn-success">Reveal</button>
          </div>
          <div>
              <p>Am</p>
            <button class="btn btn-success">Reveal</button>
          </div>
          </div>
        </div>
        );
    }
}


    


export default Info;