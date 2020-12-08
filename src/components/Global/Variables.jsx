import React, {Component} from 'react';
import {BsFiles, BsImages, BsFillChatSquareQuoteFill, BsCardHeading,BsLayersHalf,BsFilePost, BsNewspaper, BsFillXDiamondFill, BsFileRichtext} from 'react-icons/bs';

const SERVER_LINK = "http://nhatxesang.com:8088/";
const API_LINK = SERVER_LINK + "api/v1/";

class Icon extends Component {
    components = {
        BsFiles: BsFiles,
        BsImages: BsImages,
        BsFillChatSquareQuoteFill: BsFillChatSquareQuoteFill,
        BsCardHeading: BsCardHeading,
        BsNewspaper: BsNewspaper,
        BsFillXDiamondFill: BsFillXDiamondFill,
        BsFileRichtext: BsFileRichtext,
        BsFilePost:BsFilePost,
        BsLayersHalf:BsLayersHalf
    };

    render() {
       const TagName = this.components[this.props.icon || 'BsFiles'];
       return <TagName className="icon"/>
    }
}

export {
    SERVER_LINK,
    API_LINK,
    Icon
}