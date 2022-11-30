import { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { COLORS, NFTData } from '../constants';
import {
	ProductCard,
	HomeHeader,
	FocusStatusBar,
	Categories,
} from '../components';
import axios from 'axios';

const Home = () => {
	const [productData, setProductData] = useState([]);
	const getProducts = () => {
		setProductData([]);
		axios.get('https://kisanbuddy.in/api/ads').then((result) => {
			// console.log('🎃', result.data.result[0].imageUrls[0]);
			setProductData(result.data.result);
		});
	};

	useEffect(() => {
		getProducts();
	}, []);

	const handleSearch = (value) => {
		console.log('val', value);
		if (!value.length) setProductData(productData);

		const filteredData = NFTData.filter((item) =>
			item.name.toLowerCase().includes(value.toLowerCase()),
		);

		if (filteredData.length) {
			setProductData(filteredData);
		} else {
			setProductData(productData);
		}
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusStatusBar background={COLORS.primary} />
			<View style={{ flex: 1 }}>
				<View style={{ zIndex: 0 }}>
					<HomeHeader onSearch={handleSearch} />
					<ScrollView showsVerticalScrollIndicator={false}>
						<Categories />
						{productData.map((item) => (
							<ProductCard data={item} key={item.id} />
						))}
					</ScrollView>
				</View>

				<View
					style={{
						position: 'absolute',
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						zIndex: -1,
					}}
				>
					<View style={{ height: 300, backgroundColor: COLORS.white }} />
					<View style={{ flex: 1, backgroundColor: COLORS.white }} />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
