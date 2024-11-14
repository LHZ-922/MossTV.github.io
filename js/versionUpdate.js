var versionUpdate = function () {
  var getProtocol = window.location.protocol;
  var getHost = window.location.host;
  var data = {
    versionNum: 'V1.0.2.0',
    versionTime: '2024.11.12',
    versionLink: getProtocol + "//" + getHost + "/template/default/app/DSMTV.apk",
    versionSize: '21.81MB',
    versionAndroid: 'Android 4.0+',
  }
  return {
    getNum: function () {
      return data.versionNum
    },
    getTime: function () {
      return data.versionTime
    },
    getLink: function () {
      return data.versionLink
    },
    getSize: function () {
      return data.versionSize
    },
    getAndroid: function () {
      return data.versionAndroid
    }
  }
}