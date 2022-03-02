import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ src, ...rest }) => <img src={`${publicRuntimeConfig.basePath}` + src} {...rest} />

export default Image
