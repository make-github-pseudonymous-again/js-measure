import { Measure } from '../0-base' ;
import { Monoids } from '../../1-api/0-Monoids' ;

export class Interval extends Measure {

	constructor ( ) {
		super( Monoids.KEY_MAX ) ;
	}

	measure ( element ) {
		return element ;
	}

}
