class CostForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {month: "Mounth 0", total: "Cost 0"};
    }
    setValue = (e) => {
     this.setState({month: "Mounth "+e.currentTarget.dataset.month, total: "Cost "+parseInt(e.currentTarget.dataset.month)*parseInt(e.currentTarget.value)});
    }
      
    render() {
    return (
    
    <div id="wrapp">    
    <ul class="radio"> 
        <li><input type="radio" name="cost" id="monthly" value="42" data-month="1" onChange={this.setValue} /><label for="monthly">Monthly </label>cost: $42</li> 
        <li><input type="radio" name="cost" id="quarterly" value="40" data-month="3" onChange={this.setValue} /><label for="crust2" >Quarterly </label>cost: $40</li> 
        <li><input type="radio" name="cost" id="semi_annual" value="38" data-month="6" onChange={this.setValue} /><label for="semi_annual">Semi-annual </label>cost: $38</li> 
        <li><input type="radio" name="cost" id="annual" value="36" data-month="12" onChange={this.setValue} /><label for="annual">Annual </label>cost: $36</li> 
        </ul>
       <p id="month_count">{this.state.month}</p>
       <p id="total_cost">{this.state.total}</p>
        </div>  
    );
    }
    };

    
  ReactDOM.render(
      <CostForm />,
      document.getElementById("app")
  )
  

 