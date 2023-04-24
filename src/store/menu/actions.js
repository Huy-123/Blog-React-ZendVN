import { mappingMenuData } from '../../helper';
import menuService from './../../services/menuService';

export const ACT_FETCH_ALL_MENUS = 'ACT_FETCH_ALL_MENUS';

export function actFetchAllMenus(menus) {
	return {
	  type: ACT_FETCH_ALL_MENUS,
	  payload: menus,
	};
  }

export function actFetchAllMenusAsync (){
	return async (dispatch) => {
		const response = await menuService.getAll();
		const data = response.data.items;
		const menus = data.map(mappingMenuData);
		dispatch(actFetchAllMenus(menus))
	}
}