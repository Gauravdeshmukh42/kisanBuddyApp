import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';
import { PrimaryShippingArea, ProductInfo } from './ProductInfo';

export const ProductCard = ({ data }) => {
	// console.log('🤖', data);
	const navigation = useNavigation();
	return (
		<View
			style={{
				backgroundColor: COLORS.white,
				borderRadius: SIZES.font,
				borderBottom: SIZES.extraLarge,
				margin: SIZES.base,
				...SHADOWS.dark,
			}}
			key={data.id}
			handlePress={() => navigation.navigate('Details', { data })}
		>
			<View style={{ width: '100%', height: 250 }}>
				<Image
					source={{ uri: data.imageUrls[0] }}
					resizeMode="cover"
					style={{
						width: '100%',
						height: '100%',

						borderRadius: SIZES.font,
					}}
				/>
				<CircleButton imgUrl={assets.heart} right={10} top={10} />
			</View>

			<ProductInfo data={data} />
		</View>
	);
};
