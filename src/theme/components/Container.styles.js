import variable from '../variables/platform';
import colors from '../variables/colors';

const theme = {
  flex: 1,
  height: variable.platform === 'ios' 
    ? variable.deviceHeight
    : variable.deviceHeight - 20,
  backgroundColor: colors.containerBgColor
}

export default theme;