import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const items = [
	{
		image: require('../assets/images/person01.png'),
		text: 'Pick-up',
	},
	{
		image: require('../assets/images/person04.png'),
		text: 'Soft Drinks',
	},
	{
		image: require('../assets/images/person02.png'),
		text: 'Bakery Items',
	},
	{
		image: require('../assets/images/person03.png'),
		text: 'Fast Foods',
	},
	{
		image: require('../assets/images/person04.png'),
		text: 'Deals',
	},
	{
		image: require('../assets/images/person01.png'),
		text: 'Coffee & Tea',
	},
	{
		image: require('../assets/images/person02.png'),
		text: 'Desserts',
	},
];

export const Categories = () => {
	return (
		<View
			style={{
				marginTop: 5,
				backgroundColor: '#fff',
				paddingVertical: 10,
				paddingHorizontal: 15,
			}}
		>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{items.map((item, index) => (
					<View
						key={index}
						style={{
							alignItems: 'center',
							marginRight: 8,
							backgroundColor: 'transparent',
							borderRadius: 40,
							borderWidth: 1,
							borderColor: 'grey',
							minWidth: 85,
							padding: 7,
						}}
					>
						{/* <Image
							source={item.image}
							style={{
								width: 50,
								height: 40,
								resizeMode: 'contain',
							}}
						/>
						<Text style={{ fontSize: 13, fontWeight: '900' }}>{item.text}</Text> */}
						<Text style={{ fontSize: 15, fontWeight: '300' }}>{item.text}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
};
