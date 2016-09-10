'use strict';

System.register('vingle/configure/smtp/components/ConfigureSMTPSettingModal', ['flarum/components/SettingsModal'], function (_export, _context) {
    var SettingsModal, ConfigureSMTPSettingModal;
    return {
        setters: [function (_flarumComponentsSettingsModal) {
            SettingsModal = _flarumComponentsSettingsModal.default;
        }],
        execute: function () {
            ConfigureSMTPSettingModal = function (_SettingsModal) {
                babelHelpers.inherits(ConfigureSMTPSettingModal, _SettingsModal);

                function ConfigureSMTPSettingModal() {
                    babelHelpers.classCallCheck(this, ConfigureSMTPSettingModal);
                    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ConfigureSMTPSettingModal).apply(this, arguments));
                }

                babelHelpers.createClass(ConfigureSMTPSettingModal, [{
                    key: 'className',
                    value: function className() {
                        return 'Modal--small';
                    }
                }, {
                    key: 'title',
                    value: function title() {
                        return 'SMTP Settings';
                    }
                }, {
                    key: 'form',
                    value: function form() {
                        return [m(
                            'div',
                            { className: 'Form-group' },
                            m(
                                'label',
                                null,
                                ' Mail Driver '
                            ),
                            m(
                                'select',
                                { className: 'FormControl', bidi: this.setting('mail_driver') },
                                m(
                                    'option',
                                    { value: 'smtp' },
                                    'smtp'
                                ),
                                m(
                                    'option',
                                    { value: 'mail' },
                                    'mail'
                                )
                            ),
                            'smtp'
                        ), m(
                            'div',
                            { className: 'Form-group' },
                            m(
                                'label',
                                null,
                                ' Mail Encryption '
                            ),
                            m(
                                'select', 
                                { className: 'FormControl', bidi: this.setting('mail_encryption') },
                                m(
                                    'option',
                                    { value: 'tls' },
                                    'tls'
                                ),
                                m(
                                    'option',
                                    { value: 'ssl' },
                                    'ssl'
                                ),
                                m(
                                    'option',
                                    { value: 'null' },
                                    'null'
                                )
                            ),
                            'tls'
                          ), m(
                            'div',
                            { className: 'Form-group' },
                            m(
                                'label',
                                null,
                                ' Mail Port '
                            ),
                            ' ',
                            m('input', { className: 'FormControl',
                                type: 'number',
                                min: '0',
                                bidi: this.setting('mail_port')
                            }),
                            '25'
                        ), m(
                            'div',
                            { className: 'Form-group' },
                            m(
                                'label',
                                null,
                                ' Mail Host '
                            ),
                            m('input', {
                                className: 'FormControl',
                                bidi: this.setting('mail_host')
                            }),
                            'smtp.flarum.org'
                        ), m(
                            'div',
                            { className: 'Form-group' },
                            m(
                                'label',
                                null,
                                ' Mail Username '
                            ),
                            m('input', {
                                className: 'FormControl',
                                bidi: this.setting('mail_username')
                            }),
                            'smtp@flarum.org'
                        ), m(
                            'div',
                            { className: 'Form-group' },
                            m(
                                'label',
                                null,
                                ' Mail Password '
                            ),
                            m('input', {
                                type: 'password',
                                className: 'FormControl',
                                bidi: this.setting('mail_password')
                            }),
                            'password'
                        ), m(
                            'div',
                            { className: 'Form-group' },
                            m(
                                'label',
                                null,
                                ' Mail From '
                            ),
                            m('input', {
                                className: 'FormControl',
                                bidi: this.setting('mail_from')
                            }),
                            'smtp@flarum.org'
                        )];
                    }
                }]);
                return ConfigureSMTPSettingModal;
            }(SettingsModal);

            _export('default', ConfigureSMTPSettingModal);
        }
    };
});;
'use strict';

System.register('vingle/configure/smtp/main', ['flarum/app', 'vingle/configure/smtp/components/ConfigureSMTPSettingModal'], function (_export, _context) {
  var app, ConfigureSMTPSettingModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_vingleConfigureSmtpComponentsConfigureSMTPSettingModal) {
      ConfigureSMTPSettingModal = _vingleConfigureSmtpComponentsConfigureSMTPSettingModal.default;
    }],
    execute: function () {

      app.initializers.add('vingle-configure-smtp', function () {
        app.extensionSettings['vingle-configure-smtp'] = function () {
          return app.modal.show(new ConfigureSMTPSettingModal());
        };
      });
    }
  };
});
