/* @flow */

// Load npm modules.
import React from 'react';
import {
	Sparklines,
	SparklinesLine
} from 'react-sparklines';

function randomArray(length, max) {
	return Array.apply(null, Array(length)).map((_, i) => {
		return Math.round(Math.random() * max);
	});
}

class StatisticsCard extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	static propTypes = {
		caption: React.PropTypes.object,
		card_value: React.PropTypes.object
	};

	render() {
		const { caption, card_value } = this.props;

		return (
			<div className="card">
				<div className="card__body">
					<div className="row">
						<div className="col-lg-6">
							<h4 className="card__body-number">{Math.floor(Math.random() * 250) + 130}</h4> <br/>
						</div>
						<div className="col-lg-6">
							<div className="card__body-sparkline">
								<Sparklines data={randomArray(4, 10)}>
									<SparklinesLine style={{ stroke: "#d1192e", strokeWidth: "1", fill: "none" }} />
								</Sparklines>
							</div>
						</div>
						<div className="col-lg-12">
							<small className="card__body-caption">
								<span className="glyphicon glyphicon-triangle-top"></span>
								{caption}
							</small>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default StatisticsCard;
