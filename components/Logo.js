import { View, Text, Image } from 'react-native';
import { assets, FONTS, SIZES } from '../constants';

export default function Logo() {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				marginRight: 0,
			}}
		>
			<Text
				style={{
					fontFamily: FONTS.semiBold,
					fontSize: SIZES.extraLarge,
					color: 'black',
					marginTop: 5,
				}}
			>
				Kisan
			</Text>
			<Image
				source={assets.logo}
				style={{
					width: 35,
					height: 45,
					marginRight: 2,
					marginLeft: -8,
				}}
			/>
			<Text
				style={{
					fontFamily: FONTS.semiBold,
					fontSize: SIZES.extraLarge,
					color: 'black',
					marginTop: 5,
				}}
			>
				uddy
			</Text>
		</View>
	);
}
