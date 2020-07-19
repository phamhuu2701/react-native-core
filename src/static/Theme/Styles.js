import Colors from './Colors';
import {Platform, Dimensions} from 'react-native';

const textSize = 15;
const textSizeSmall = textSize * 0.8;
const textSizeLarge = textSize * 1.2;
const noteSize = textSizeSmall;
const noteSizeSmall = noteSize * 0.8;
const noteSizeLarge = noteSize * 1.2;

const paddingSize = 15;
const paddingSizeSmall = (paddingSize * 2) / 3;
const paddingSizeLarge = (paddingSize * 4) / 3;
const marginSize = 15;
const marginSizeSmall = (marginSize * 2) / 3;
const marginSizeLarge = (marginSize * 4) / 3;

export default {
  // text
  text: {
    fontSize: textSize,
    color: Colors.text,
    lineHeight: textSize * 1.6,
  },
  textSmall: {
    fontSize: textSizeSmall,
    color: Colors.text,
    lineHeight: textSizeSmall * 1.6,
  },
  textLarge: {
    fontSize: textSizeLarge,
    color: Colors.text,
    lineHeight: textSizeLarge * 1.6,
  },
  textLargeExtra: {
    fontSize: textSizeLarge * 1.2,
    color: Colors.text,
    lineHeight: textSizeLarge * 1.6 * 1.2,
  },

  // title
  title: {
    fontSize: textSize,
    color: Colors.text,
    lineHeight: textSize * 1.6,
    fontWeight: 'bold',
  },
  titleSmall: {
    fontSize: textSizeSmall,
    color: Colors.text,
    lineHeight: textSizeSmall * 1.6,
    fontWeight: 'bold',
  },
  titleLarge: {
    fontSize: textSizeLarge,
    color: Colors.text,
    lineHeight: textSizeLarge * 1.6,
    fontWeight: 'bold',
  },
  titleLargeExtra: {
    fontSize: textSizeLarge * 1.2,
    color: Colors.text,
    lineHeight: textSizeLarge * 1.6 * 1.2,
    fontWeight: 'bold',
  },

  // note
  note: {
    fontSize: noteSize,
    color: Colors.note,
    lineHeight: noteSize * 1.6,
  },
  noteSmall: {
    fontSize: noteSizeSmall,
    color: Colors.note,
    lineHeight: noteSizeSmall * 1.6,
  },
  noteLarge: {
    fontSize: noteSizeLarge,
    color: Colors.note,
    lineHeight: noteSizeLarge * 1.6,
  },
  noteLargeExtra: {
    fontSize: noteSizeLarge * 1.2,
    color: Colors.note,
    lineHeight: noteSizeLarge * 1.6 * 1.2,
  },

  // container
  container: {
    flex: 1,
  },
  containerPadding: {
    flex: 1,
    padding: paddingSize,
  },
  containerPaddingSmall: {
    flex: 1,
    padding: paddingSizeSmall,
  },
  containerPaddingLarge: {
    flex: 1,
    padding: paddingSizeLarge,
  },
  containerMargin: {
    flex: 1,
    margin: marginSize,
  },
  containerMarginSmall: {
    flex: 1,
    margin: marginSizeSmall,
  },
  containerMarginLarge: {
    flex: 1,
    margin: marginSizeLarge,
  },

  // block
  block: {
    backgroundColor: '#FFFFFF',
  },
  blockElevation: {
    elevation: 1,
  },
  blockPadding: {
    padding: paddingSize,
  },
  blockPaddingSmall: {
    padding: paddingSizeSmall,
  },
  blockPaddingLarge: {
    padding: paddingSizeLarge,
  },
  blockMargin: {
    margin: marginSize,
  },
  blockMarginSmall: {
    margin: marginSizeSmall,
  },
  blockMarginLarge: {
    margin: marginSizeLarge,
  },
  blockRadius: {
    borderRadius: 5,
  },
  blockBorder: {
    borderWidth: 1,
    borderColor: Colors.border,
  },
  blockBorderRadius: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 5,
  },

  // block content
  blockRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blockRowSpaceBetweenContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blockColumnContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  blockColumnSpaceBetweenContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blockCenterItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // padding
  padding: {
    padding: paddingSize,
  },
  paddingSmall: {
    padding: paddingSizeSmall,
  },
  paddingLarge: {
    padding: paddingSizeLarge,
  },
  paddingHorizontal: {
    paddingHorizontal: paddingSize,
  },
  paddingHorizontalSmall: {
    paddingHorizontal: paddingSizeSmall,
  },
  paddingHorizontalLarge: {
    paddingHorizontal: paddingSizeLarge,
  },
  paddingVertical: {
    paddingVertical: paddingSize,
  },
  paddingVerticalSmall: {
    paddingVertical: paddingSizeSmall,
  },
  paddingVerticalLarge: {
    paddingVertical: paddingSizeLarge,
  },
  paddingTop: {
    paddingTop: paddingSize,
  },
  paddingTopSmall: {
    paddingTop: paddingSizeSmall,
  },
  paddingTopLarge: {
    paddingTop: paddingSizeLarge,
  },
  paddingBottom: {
    paddingBottom: paddingSize,
  },
  paddingBottomSmall: {
    paddingBottom: paddingSizeSmall,
  },
  paddingBottomLarge: {
    paddingBottom: paddingSizeLarge,
  },
  paddingLeft: {
    paddingLeft: paddingSize,
  },
  paddingLeftSmall: {
    paddingLeft: paddingSizeSmall,
  },
  paddingLeftLarge: {
    paddingLeft: paddingSizeLarge,
  },
  paddingRight: {
    paddingRight: paddingSize,
  },
  paddingRightSmall: {
    paddingRight: paddingSizeSmall,
  },
  paddingRightLarge: {
    paddingRight: paddingSizeLarge,
  },

  // margin
  margin: {
    margin: marginSize,
  },
  marginSmall: {
    margin: marginSizeSmall,
  },
  marginLarge: {
    margin: marginSizeLarge,
  },
  marginHorizontal: {
    marginHorizontal: marginSize,
  },
  marginHorizontalSmall: {
    marginHorizontal: marginSizeSmall,
  },
  marginHorizontalLarge: {
    marginHorizontal: marginSizeLarge,
  },
  marginVertical: {
    paddingVertical: marginSize,
  },
  marginVerticalSmall: {
    paddingVertical: marginSizeSmall,
  },
  marginVerticalLarge: {
    paddingVertical: marginSizeLarge,
  },
  marginTop: {
    marginTop: marginSize,
  },
  marginTopSmall: {
    marginTop: marginSizeSmall,
  },
  marginTopLarge: {
    marginTop: marginSizeLarge,
  },
  marginBottom: {
    marginBottom: marginSize,
  },
  marginBottomSmall: {
    marginBottom: marginSizeSmall,
  },
  marginBottomLarge: {
    marginBottom: marginSizeLarge,
  },
  marginLeft: {
    marginLeft: marginSize,
  },
  marginLeftSmall: {
    marginLeft: marginSizeSmall,
  },
  marginLeftLarge: {
    marginLeft: marginSizeLarge,
  },
  marginRight: {
    marginRight: marginSize,
  },
  marginRightSmall: {
    marginRight: marginSizeSmall,
  },
  marginRightLarge: {
    marginRight: marginSizeLarge,
  },

  // border
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.border,
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: Colors.border,
  },

  // data result
  dataResult: {
    fontSize: noteSize,
    color: Colors.note,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingVertical: paddingSize,
  },

  // button
  buttonContainer: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: paddingSizeSmall,
    marginBottom: marginSize,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    fontSize: textSize,
    color: Colors.white,
  },

  // form
  inputGroup: {
    marginBottom: marginSize,
  },
  inputLabel: {
    fontSize: textSize,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: marginSize / 2,
  },
  inputControl: {
    padding: paddingSizeSmall,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: paddingSizeSmall / 2,
  },
  inputError: {
    fontSize: noteSize,
    color: Colors.error,
    marginBottom: marginSize,
  },

  // image block
  imageBlock: {
    borderRadius: 5,
    marginBottom: marginSize,
  },
  imageBlockUpload: {
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: 5,
    borderStyle: 'dashed',
    marginBottom: marginSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBlockHalfScreen: {
    borderRadius: 5,
    marginBottom: marginSize,
    width: (Dimensions.get('window').width - 3 * marginSize) / 2,
    height: (Dimensions.get('window').width - 3 * marginSize) / 2,
  },
  imageBlockUploadHalfScreen: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderStyle: 'dashed',
    borderRadius: 5,
    marginBottom: marginSize,
    alignItems: 'center',
    justifyContent: 'center',
    width: (Dimensions.get('window').width - 3 * marginSize) / 2,
    height: (Dimensions.get('window').width - 3 * marginSize) / 2,
  },
  imageBlockButtonDelete: {
    width: 30,
    height: 30,
    margin: marginSize,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.error,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  // toast
  toastStyle: {
    borderRadius: 20,
    margin: Platform.OS === 'android' ? marginSize : 0,
  },
};
