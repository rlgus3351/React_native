import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,useWindowDimensions } from 'react-native';
import { useState } from 'react';
import Button, { ButtonTypes } from './components/Button';

const Operators={
    CLEAR:'C',
    PLUS : "+",
    MINUS:"-",
    EQUAL:"=",
    MULTIPLE:"x",
    DIVIDE:"÷"
  }



const App = () => {

    const [result,setResult] = useState(0);
    const [formula, setFormula] = useState([]);

    const calculate = () =>{
        let calculatedNumber = 0;
        let operator = '';
    
        formula.forEach((value)=>{
          if([Operators.PLUS, Operators.MINUS, Operators.DIVIDE, Operators.MULTIPLE].includes(value)){
            operator = value;
          }else{
            if(operator === Operators.PLUS){
              calculatedNumber += value;
            }else if(operator === Operators.MINUS){
              calculatedNumber -= value;
            }else if(operator === Operators.MULTIPLE){
                calculatedNumber *= value;
            }else if(operator === Operators.DIVIDE){
                calculatedNumber /= value;
            }
            else{
              calculatedNumber = value;
            }
          }
        });
        setResult(calculatedNumber);
        setFormula([]);
      };

      const onPressNumber = (number) =>{
        const last = formula[formula.length-1];
        if(isNaN(last)){
          setResult(number);
          setFormula((prev)=>[...prev,number]);
        }else{
          const newNumber = (last >> 0) * 10 + number;
          setResult(newNumber);
          setFormula((prev) =>{
            prev.pop();
            return[...prev, newNumber];
          });
        }
      }
    
      const onPressOperator = (operator)=>{
        switch(operator){
          case Operators.CLEAR:
            setFormula([]);
            setResult(0);
            return;
          case Operators.EQUAL:
            calculate();
            return;
          default:{
            const last = formula[formula.length - 1];
            if([Operators.PLUS, Operators.MINUS, Operators.DIVIDE, Operators.MULTIPLE].includes(last)){
              setFormula((prev)=>{
                prev.pop();
                return[...prev,operator];
              });
            }else{
              setFormula((prev)=>[...prev,operator]);
            }
            return;
          }
          
        }
        
      }
    const windowWidth = useWindowDimensions().width;
    const width = (windowWidth - 5)/5;


  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <View style={styles.resultContainer}>
      <Text style={styles.text}>{result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
        <View style={styles.number}>
            {/* 숫자 버튼 */}
            {[1,2,3,4,5,6,7,8,9].map((num) =>(
              <Button
              key={num}
              title={num.toString()}
              onPress={()=>onPressNumber(num)}
              buttonStyle={{width, height:width, marginTop:10}}/>
            ))}

          
            </View>
          <View style={styles.number}>{/* 0, = 버튼 */}
          
            <Button
                title="0"
                key={0}
                onPress={()=>onPressNumber(0)}
                buttonType={ButtonTypes.NUMBER}
                buttonStyle={{
                width:width,
                height:width,
                marginTop:10,
              }}/>
            <Button
                title="C"
                
                buttonType={ButtonTypes.OPERATOR}
                buttonStyle={{
                width:width,
                height:width,
                marginTop:10,
              }}/>
            <Button
                title="="
                onPress={()=> onPressOperator(Operators.EQUAL)}
                buttonType={ButtonTypes.OPERATOR}
                buttonStyle={{
                width,
                height:width,
                marginTop:10,
                }}/>
            </View>
        </View>
        <View>{/*연산 버튼*/}
        <Button 
            title='÷'
            onPress={()=> onPressOperator(Operators.DIVIDE)}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{width, height:width, marginTop:0}}/>
        <Button 
            title='x'
            onPress={()=> onPressOperator(Operators.MULTIPLE)}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{width, height:width, marginTop:10}}/>
            <Button 
            title='-'
            onPress={()=> onPressOperator(Operators.MINUS)}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{width, height:width, marginTop:10}}/>
            <Button 
            title='+'
            onPress={()=> onPressOperator(Operators.PLUS)}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{width, height:width*1, marginTop:10}}/></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      backgroundColor:'#000000',
      alignItems:'stretch',
      justifyContent:'center',
    },
    text:{
      fontSize:60,
      fontWeight:'700',
      color:'#ffffff',
      paddingBottom:30,
      paddingRight:30,
    },
    resultContainer:{
      flex:1,
      backgroundColor:'#000000',
      justifyContent:'flex-end',
      alignItems:'flex-end',
    },
    buttonContainer:{
      background:'#000000', 
      flexDirection:'row',
      justifyContent:'space-evenly'
      },
      leftPad :{
        width:'75%',
      },
      number :{
        flexWrap:'wrap-reverse',
        flexDirection:'row',
        justifyContent:'space-evenly'
      },
      bottom :{
        flexDirection:'row',
        justifyContent:'space-evenly'
      },
  
      
    });
  
  
export default App;