import searchNotFoundDes from '../../../images/busket@3x_320-min.jpg';
import searchNotFoundTab from '../../../images/busket@2x_320-min.jpg';
import searchNotFoundMob from '../../../images/busket@1x_320-min.jpg';

import {
    SearchNotFoundWrapper,
    SearchNotFoundImage,
    SearchNotFoundText,
} from './SearchNotFound.styled';

export default function SearchNotFound() {
  return (
    <SearchNotFoundWrapper>
      <SearchNotFoundImage>
        <source
          srcSet={`${searchNotFoundDes} 1x`}
          media="(min-width:1280px)"
        />
        <source
          srcSet={`${searchNotFoundTab} 1x`}
          media="(min-width:768px)"
        />
        <source
          srcSet={`${searchNotFoundMob} 1x`}
          media="(max-width:767px)"
        />
        <img
          src={`${searchNotFoundMob} 1x`}
          loading="lazy"
          alt="Search not found"
        />
      </SearchNotFoundImage>
      <SearchNotFoundText>Try looking for something else..</SearchNotFoundText>
    </SearchNotFoundWrapper>
  );
}
