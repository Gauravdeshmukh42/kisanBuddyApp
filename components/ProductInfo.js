import React from 'react';
import { Image, Text, View } from 'react-native';
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants';

export const PrimaryShippingArea = ({ data }) => {
	const { shippingarea } = data;
	return (
		<View>
			<Text
				style={{
					fontFamily: FONTS.regular,
					fontSize: SIZES.medium,
					color: COLORS.primary,
				}}
			>
				Shipable at :
			</Text>
			<Text
				style={{
					fontFamily: FONTS.semiBold,
					fontSize: SIZES.large,
					color: COLORS.primary,
				}}
			>
				{shippingarea[0].district}
			</Text>
		</View>
	);
};

export const PriceInRuppe = ({ price }) => {
	return (
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
			<Image
				source={assets.eth}
				resizeMode="contain"
				style={{ width: 20, height: 20, marginRight: 2 }}
			/>
			<Text
				style={{
					fontFamily: FONTS.medium,
					fontSize: SIZES.font,
					color: COLORS.primary,
				}}
			>
				{price}
			</Text>
		</View>
	);
};

export const ImageCmp = ({ imgUrl, index }) => {
	return (
		<Image
			source={imgUrl}
			resizeMode="contain"
			style={{
				width: 48,
				height: 48,
				marginLeft: index === 0 ? 0 : -SIZES.font,
			}}
		/>
	);
};

export const ProductTitle = ({ title }) => {
	return (
		<View
			style={{
				backgroundColor: 'grey',
				borderRadius: 40,
				borderWidth: 1,
				borderColor: 'white',
				minWidth: 85,
				padding: 6,
				marginRight: 8,
				// justifyContent: 'flex-start',
			}}
		>
			<Text
				style={{
					fontFamily: FONTS.semiBold,
					fontSize: SIZES.large,
					color: COLORS.white,
					textAlign: 'center',
				}}
			>
				🌱 {title}
			</Text>
		</View>
	);
};

export const PricePerKG = ({ price }) => {
	return (
		// <View
		// 	style={{
		// 		paddingHorizontal: SIZES.font,
		// 		paddingVertical: SIZES.base,
		// 		backgroundColor: COLORS.white,
		// 		borderRadius: SIZES.font,
		// 		justifyContent: 'center',
		// 		alignItems: 'center',
		// 		...SHADOWS.light,
		// 		elevation: 1,
		// 		maxWidth: '50%',
		// 	}}
		// >
		// 	<Text
		// 		style={{
		// 			fontFamily: FONTS.regular,
		// 			fontSize: SIZES.small,
		// 			color: COLORS.primary,
		// 		}}
		// 	>
		// 		Price per Kg. :
		// 	</Text>
		// 	<Text
		// 		style={{
		// 			fontFamily: FONTS.regular,
		// 			fontSize: SIZES.small,
		// 			color: COLORS.primary,
		// 		}}
		// 	>
		// 		{price}
		// 	</Text>
		// </View>
		<View
			style={{
				backgroundColor: 'grey',
				borderRadius: 40,
				borderWidth: 1,
				borderColor: 'white',
				minWidth: 85,
				padding: 6,
			}}
		>
			<Text
				style={{
					fontFamily: FONTS.semiBold,
					fontSize: SIZES.large,
					color: COLORS.white,
					textAlign: 'center',
				}}
			>
				₹ {price}/-
			</Text>
		</View>
	);
};

export const ProductInfo = ({ data }) => {
	const { title, price } = data;
	return (
		<View
			style={{
				width: '100%',
				paddingHorizontal: SIZES.font,
				marginTop: -45,
				flexDirection: 'row',
				justifyContent: 'flex-start',
			}}
		>
			<ProductTitle title={title} />
			<PricePerKG price={price} />
		</View>
	);
};
