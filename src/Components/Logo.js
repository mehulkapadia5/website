import React, { Component } from 'react';

class Logo extends Component {
    render() { 
        return (
            <div class="ttt-header__logo is-light">
		<a href="https://thinktankteam.info/">
			<svg width="24px" height="24px" viewBox="0 0 30 30" version="1.1">
				<g stroke="none" stroke-width="1" fill-rule="evenodd">
					<g transform="translate(-33.000000, -33.000000)">
						<g id="logo-fill" transform="translate(32.000000, 32.000000)">
							<rect x="0" y="28" width="2" height="2"></rect>
							<rect x="4" y="28" width="2" height="2"></rect>
							<rect x="0" y="24" width="6" height="2"></rect>
							<rect x="8" y="24" width="6" height="6"></rect>
							<rect x="0" y="16" width="14" height="6"></rect>
							<rect x="16" y="16" width="14" height="14"></rect>
							<rect x="0" y="0" width="30" height="14"></rect>
						</g>
					</g>
				</g>
			</svg>
		</a>
	</div>
        );
    }
}
 
export default Logo;