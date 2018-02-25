import { connect } from 'react-redux'
import Home from '../../modules/home.js'
import About from '../../modules/about.js'
import { addCounterAction,minusCounterAction } from '../actions/index.js'
function mapStateToProps(state) {
    console.log('mapStateToProps__state', state)
    return { count: state.Counter.count }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return{
        addCounter:()=>dispatch(addCounterAction),
        minusCounter:()=>dispatch(minusCounterAction)
    }
}

//连接组件
const conbineHome = connect(mapStateToProps, mapDispatchToProps)(Home)
const conbineAbout = connect(mapStateToProps)(About)
export {
  conbineHome,
  conbineAbout
}