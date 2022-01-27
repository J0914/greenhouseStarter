import {useTheme} from '../../context/ThemeContext';
import './LightSwitch.css';

function LightSwitch() {
  const {setThemeName} = useTheme();

  return (
    <div className="light-switch day">
      <div onClick={() => setThemeName('day')} className="on">DAY</div>
      <div onClick={() => setThemeName('night')} className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;