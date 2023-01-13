(function (){
//  작업
// color
function ProImg(props){
  return (
    <>
    <img 
      src={`../images/${props.color}.jpg`}
      alt="상세이미지" />
    </>
  )
}
function ProSize(props){
  function optionSize(){
    // const sizes = window.data.allSize;
    // console.log(sizes)
    return props.sizes.map((item, index) => { 
      return (<option value={item} key={index}>{item}</option>)})
  }
  function onSizeChange(event){
    // console.log(event.target.value);
    props.hSizeChange(event.target.value)
  }
// 3:00  - 10
  return (
    <>
   <p className="filed">
    <label htmlFor="color">size:</label>
    <select 
      id="color"
      defaultValue={props.size}
      onChange={onSizeChange}
    >
      {/* <option value="">값</option> */}
      {optionSize()}
    </select>
   </p>
    </>
  )
}
function ProColor(props){

  // 반복문
function optionColor(){
  // const colors = window.data.allColor;

  return props.colors.map(
    (item,index) => {
      return (<option value={item} key={index}>{item}</option>)
    }
  )
}
function onColorChange(event){
  props.hColorChang(event.target.value)
}
  return (
    <>
   <p className="filed">
   <label for="size">Color:</label>
    <select
      defaultValue={props.color}
      onChange = {onColorChange} >
      {/* <option></option> */}
      {optionColor()}
    </select>
    </p>   
    </>
  )
}

function App(){
 const [size,setSize] = React.useState('9');
 const [color,setColor] = React.useState('red');

 const [sizes,setSizes] = React.useState(window.data.allSize);
 const [colors,setColors] = React.useState(window.data.allColor);

 function hSizeChange(seletSize){
   let ableColors = window.data.bySize[seletSize];
  //  console.log(ableColors)
  // setColors(ableColors);
  // setSize(seletSize);
  if(ableColors.indexOf(color) === -1){
    setColor(ableColors[0])
    setSize(selectSize)
}else{
    
    setColors(ableColors);
    setSize(selectSize)
}
    // setSize(selectSize)
 }
 function hColorChang(selectColor){
  const ableSizes = window.data.byColor[selectColor]
  // setSizes(ableSizes)
  // setColor(selectColor)
  if(ableSizes.indexOf(size) === -1){
      setSizes(ableSizes)
      setColor(selectColor)
  }else{
   
    setSizes(ableSizes)
    setColor(selectColor)
  }
  // setColor(selectColor)
}
  return (
    <div className = "custom">
      <div className = "pic">
          <ProImg 
              color={color} />
      </div>
      <div className = "selector">
          <ProSize 
              size={size}
              sizes={sizes}
              color={color}
              colors={colors}
              hSizeChange = {hSizeChange}
              hColorChang={hColorChang}
              />
          <ProColor 
              size={size}
              sizes={sizes}
              color={color}
              colors={colors}
              hSizeChange = {hSizeChange}
              hColorChang={hColorChang}
          />
      </div>
    </div>
  )
}

// export
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

})()