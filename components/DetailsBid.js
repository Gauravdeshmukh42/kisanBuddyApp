import { View, Text, Image } from 'react-native';
import { PriceInRuppe } from './SubInfo';
import { COLORS, FONTS, SIZES, assets } from '../constants';

export const DetailsBid = ({ bid }) => {
	return (
		<View
			style={{
				width: '100%',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginVertical: SIZES.base,
				paddingHorizontal: SIZES.base * 2,
			}}
		>
			<Image
				source={bid.image}
				resizeMode="contain"
				style={{ width: 60, height: 60 }}
			/>

			<View>
				<Text
					style={{
						fontFamily: FONTS.semiBold,
						color: COLORS.primary,
						fontSize: SIZES.small + 3,
					}}
				>
					Bid placed by - {bid.name}
				</Text>
				<Text
					style={{
						fontFamily: FONTS.regular,
						color: COLORS.secondary,
						fontSize: SIZES.small,
						marginTop: 2,
					}}
				>
					{bid.date}
				</Text>
			</View>
			<PriceInRuppe price={bid.price} />
		</View>
	);
};
