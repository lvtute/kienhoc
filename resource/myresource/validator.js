$(document).ready(function () {
    $('#contact-form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            full_name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your full name.'
                    }
                }
            },
            // pwd: {
            //     validators: {
            //         stringLength: {
            //             min: 2,
            //         },
            //         notEmpty: {
            //             message: 'Please enter your desired password.'
            //         }
            //     }
            // },
            // confirm_pwd: {
            //     validators: {
            //         stringLength: {
            //             min: 2,
            //         },
            //         notEmpty: {
            //             message: 'Please enter your desired password.'
            //         }
            //     }
            // },


            pwd: {
                validators: {
                    identical: {
                        field: 'confirm_pwd',
                        message: 'The password and its confirm are not the same'
                    },
                    stringLength: {
                        min: 2
                    },

                    notEmpty: {
                        message: 'Please enter your desired password.'
                    },
                    regexp: {
                        // regexp: /^[a-z\S_0-9]+$/i,
                        regexp: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
                        message: 'User name cannot contain space or special characters.'
                    }
                }
            },

            oldpwd: {
                validators: {
                    stringLength: {
                        min: 2
                    },

                    notEmpty: {
                        message: 'Please enter your desired password.'
                    },
                    regexp: {
                        // regexp: /^[a-z\S_0-9]+$/i,
                        regexp: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
                        message: 'User name cannot contain space or special characters.'
                    }
                }
            },


            confirm_pwd: {
                validators: {
                    stringLength: {
                        min: 2
                    },
                    identical: {
                        field: 'pwd',
                        message: 'The password and its confirm are not the same'
                    },
                    notEmpty: {
                        message: 'Please enter your desired password.'
                    },
                    regexp: {
                        // regexp: /^[a-z\S_0-9]+$/i,
                        regexp: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
                        message: 'User name cannot contain space or special characters.'
                    }

                }
            },
            user_name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your user name'
                    },
                    regexp: {
                        // regexp: /^[a-z\S_0-9]+$/i,

                        // regexp: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,

                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'

                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                    stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            comment: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 200,
                        message: 'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                }
            },
            // date_of_birth: {
            //     validators: {
            //         date: {
            //             format: 'yyyy/mm/dd',
            //             message: 'The value is not a valid date'
            //         }
            //     }
            // }
        }
    })
        .on('success.form.bv', function (e) {
            $('#success_message').slideDown({
                opacity: "show"
            }, "slow") // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function (result) {
                console.log(result);
            }, 'json');
        });
});

//term agreement