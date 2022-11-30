import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { Divider } from 'react-native-elements';
import { COLORS, FONTS, SIZES, assets, SHADOWS } from '../constants';
import Logo from './Logo';

export const HomeHeader = ({ onSearch }) => {
	return (
		<>
			<View
				style={{
					backgroundColor: COLORS.white,
					paddingHorizontal: SIZES.font,
					paddingVertical: 4,
					...SHADOWS.dark,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Logo />
					{/* <Image
					source={assets.logo}
					resizeMode="contain"
					style={{ width: 90, height: 25 }}
				/> */}

					<View style={{ width: 45, height: 45 }}>
						<Image
							source={assets.person01}
							resizeMode="contain"
							style={{ width: '100%', height: '100%' }}
						/>
					</View>
				</View>
				{/* <View style={{ marginTop: SIZES.font }}>
				<View
					style={{
						width: '100%',
						backgroundColor: COLORS.gray,
						borderRadius: SIZES.font,
						flexDirection: 'row',
						alignItems: 'center',
						paddingHorizontal: SIZES.font,
						paddingVertical: SIZES.small - 2,
					}}
				>
					<Image
						source={assets.search}
						resizeMode="contain"
						style={{
							width: 20,
							height: 20,
							marginRight: SIZES.base,
						}}
					/>
					<TextInput
						placeholder="Search NFTs"
						style={{ flex: 1 }}
						onChangeText={onSearch}
					/>
				</View>
			</View> */}
			</View>
			<Divider style={{ paddingBottom: 1 }} />
		</>
	);
};
