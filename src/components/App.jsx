import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import {
  View,
  Text,
} from 'react-native';
import { totalCoins } from "../coins.js";
import { fahrenheitToCelsius } from "../tempConvert.js";
import { cubeVolume } from "../cubeVolume.js";
import { calculateGymCost } from "../gymCost.js";
import { earthquakeDamage } from "../earthquake.js";


export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />

      <Text>--- Coin Calculator ---</Text>

      <Text>
       All zeros: ${totalCoins(0, 0, 0, 0, 0)}
      </Text>

      <Text>
      2N 1D 1Q: ${totalCoins(2, 1, 1, 0, 0)}
      </Text>

      <Text>
      Mixed: ${totalCoins(5, 5, 4, 2, 1)}
      </Text>

      <Text>--- Temperature Converter ---</Text>

      <Text>
      32°F = {fahrenheitToCelsius(32)}°C
      </Text>

      <Text>
      212°F = {fahrenheitToCelsius(212)}°C
      </Text>

      <Text>
      70°F = {Math.round(fahrenheitToCelsius(70))}°C
      </Text>

      <Text>--- Cube Volume ---</Text>

      <Text>
      Height 1m = {cubeVolume(1)} m³
      </Text>

      <Text>
       Height 2m = {cubeVolume(2)} m³
      </Text>

      <Text>
       Height 3m = {cubeVolume(3)} m³
      </Text>

      <Text>--- Gym Cost Calculator ---</Text>

      <Text>
      Cost for 100 with 0 friends: ${calculateGymCost(100, 0).toFixed(2)}
      </Text>

      <Text>
      Cost for 100 with 1 friend: ${calculateGymCost(100, 1).toFixed(2)}
      </Text>

      <Text>
      Cost for 100 with 2 friends: ${calculateGymCost(100, 2).toFixed(2)}
      </Text>

      <Text>
      Cost for 100 with 3 friends: ${calculateGymCost(100, 3).toFixed(2)}
      </Text>

      <Text>
      Cost for 100 with 4 friends: ${calculateGymCost(100, 4).toFixed(2)}
      </Text>
      <Text>--- Earthquake Damage Calculator ---</Text>

      <Text>4.2 → {earthquakeDamage(4.2)}</Text>
      
      <Text>5.2 → {earthquakeDamage(5.2)}</Text>

      <Text>6.0 → {earthquakeDamage(6.0)}</Text>

      <Text>7.0 → {earthquakeDamage(7.0)}</Text>

      <Text>8.1 → {earthquakeDamage(8.1)}</Text>

      </View>
  );
}

