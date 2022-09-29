describe('#half', function () {
  xit('accepts data attribute', function () {
    // given
    Helper._append('div', { 'data-cancel-class': true });

    // when
    var raty = new Raty('[data-cancel-class]');

    // then
    expect(raty.opt.cancelClass).toEqual(true);
  });

  context('as *false', function () {
    beforeEach(function () {
      this.el = Helper.create('#el');
    });

    context('and :halfShow', function () {
      context('as *false', function () {
        xit('rounds down while less the full limit', function () {
          // given
          var raty = new Raty('#el', {
            half: false,
            halfShow: false,
            round: { down: 0.25, full: 0.6, up: 0.76 },
            score: 0.5,
          });

          // when
          raty.init();

          // then
          var stars = raty.self.querySelectorAll('img');

          expect(Helper.extension(stars[0].src)).toEqual('star-off.png');
          expect(Helper.extension(stars[1].src)).toEqual('star-off.png');
          expect(Helper.extension(stars[2].src)).toEqual('star-off.png');
          expect(Helper.extension(stars[3].src)).toEqual('star-off.png');
          expect(Helper.extension(stars[4].src)).toEqual('star-off.png');
        });

        xit('rounds full when equal the full limit', function () {
          // given
          var raty = new Raty('#el', {
            half: false,
            halfShow: false,
            round: { down: 0.25, full: 0.6, up: 0.76 },
            score: 0.6,
          });

          // when
          raty.init();

          // then
          var star = raty.self.querySelector('img');

          expect(Helper.extension(star.src)).toEqual('star-on.png');
        });
      });
    });
  });

  context('as *true', function () {
    beforeEach(function () {
      this.el = Helper.create('#el');
    });

    context('on click', function () {
      context('into half area', function () {
        xit('receives the half value', function () {
          // given
          var raty = new Raty('#el', {
            half: true,
            halfShow: true,
          }).init();

          debugger;
          // when
          Helper.click(this.el, 1, 5);

          // then
          expect(raty.self.querySelector('input').value).toEqual('1.5');
        });

        xit('gives a callback the rounded value', function () {
          // given
          var raty = new Raty('#el', {
            half: true,
            halfShow: true,
            click: function (score) {
              // then
              expect(score).toEqual(1.5);
            },
          }).init();

          // when
          Helper.click(this.el, 1, 5);
        });
      });

      context('into round area', function () {
        xit('receives the rounded value', function () {
          // given
          var raty = new Raty('#el', {
            half: true,
            halfShow: true,
          }).init();

          // when
          Helper.click(this.el, 1, 9);

          // then
          expect(raty.self.querySelector('input').value).toEqual('2');
        });

        xit('gives a callback the rounded value', function () {
          // given
          var raty = new Raty('#el', {
            half: true,
            halfShow: true,
            click: function (score) {
              // then
              expect(score).toEqual(2);
            },
          }).init();

          // when
          Helper.click(this.el, 1, 9);
        });
      });

      context('into zero position', function () {
        xit('receives the half value', function () {
          // given
          var raty = new Raty('#el', {
            half: true,
            halfShow: true,
          }).init();

          // when
          Helper.click(this.el, 1, 0);

          // then
          expect(raty.self.querySelector('input').value).toEqual('1');
        });
      });
    });

    context('and :halfShow', function () {
      context('as *false', function () {
        xit('ignores the round down while less down limit', function () {
          // given

          // when
          var raty = new Raty('#el', {
            half: true,
            halfShow: false,
            round: { down: 0.25, full: 0.6, up: 0.76 },
            score: 0.24,
          }).init();

          // then
          expect(Helper.extension(raty.self.querySelector('img').src)).toEqual('star-off.png');
          expect(raty.self.querySelector('input').value).toEqual('0.24');
        });

        xit('ignores half while greater then down limit', function () {
          // given

          // when
          var raty = new Raty('#el', {
            half: true,
            halfShow: false,
            round: { down: 0.25, full: 0.6, up: 0.76 },
            score: 0.26,
          }).init();

          // then
          expect(Helper.extension(raty.self.querySelector('img').src)).toEqual('star-off.png');
          expect(raty.self.querySelector('input').value).toEqual('0.26');
        });

        xit('ignores half while equal full limit, ignoring it', function () {
          // given

          // when
          var raty = new Raty('#el', {
            half: true,
            halfShow: false,
            round: { down: 0.25, full: 0.6, up: 0.76 },
            score: 0.6,
          }).init();

          // then
          expect(Helper.extension(raty.self.querySelector('img').src)).toEqual('star-on.png');
          expect(raty.self.querySelector('input').value).toEqual('0.6');
        });

        xit('ignores half while greater than down limit and less than up limit', function () {
          // given

          // when
          var raty = new Raty('#el', {
            half: true,
            halfShow: false,
            round: { down: 0.25, full: 0.6, up: 0.76 },
            score: 0.75,
          }).init();

          // then
          expect(Helper.extension(raty.self.querySelector('img').src)).toEqual('star-on.png');
          expect(raty.self.querySelector('input').value).toEqual('0.75');
        });

        xit('ignores full while equal or greater than up limit', function () {
          // given

          // when
          var raty = new Raty('#el', {
            half: true,
            halfShow: false,
            round: { down: 0.25, full: 0.6, up: 0.76 },
            score: 0.76,
          }).init();

          // then
          expect(Helper.extension(raty.self.querySelector('img').src)).toEqual('star-on.png');
        });
      });

      context('as *true', function () {
        context('on :score', function () {
          xit('rounds down while less down limit', function () {
            // given

            // when
            var raty = new Raty('#el', {
              half: true,
              halfShow: true,
              round: { down: 0.25, full: 0.6, up: 0.76 },
              score: 0.24,
            }).init();

            // then
            expect(Helper.extension(raty.self.querySelector('img').src)).toEqual('star-off.png');
          });

          xit('receives half while greater then down limit', function () {
            // given

            // when
            var raty = new Raty('#el', {
              half: true,
              halfShow: true,
              round: { down: 0.25, full: 0.6, up: 0.76 },
              score: 0.26,
            }).init();

            // then
            expect(Helper.extension(raty.self.querySelector('img').src)).toEqual('star-half.png');
          });

          xit('receives half while equal full limit, ignoring it', function () {
            // given

            // when
            var raty = new Raty('#el', {
              half: true,
              halfShow: true,
              round: { down: 0.25, full: 0.6, up: 0.76 },
              score: 0.6,
            }).init();

            // then
            expect(Helper.extension(raty.self.querySelector('img').src)).toEqual('star-half.png');
          });

          xit('receives half while greater than down limit and less than up limit', function () {
            // given

            // when
            var raty = new Raty('#el', {
              half: true,
              halfShow: true,
              round: { down: 0.25, full: 0.6, up: 0.76 },
              score: 0.75,
            }).init();

            // then
            expect(Helper.extension(raty.self.querySelector('img').src)).toEqual('star-half.png');
          });

          xit('receives full while equal or greater than up limit', function () {
            // given

            // when
            var raty = new Raty('#el', {
              half: true,
              halfShow: true,
              round: { down: 0.25, full: 0.6, up: 0.76 },
              score: 0.76,
            }).init();

            // then
            expect(Helper.extension(raty.self.querySelector('img').src)).toEqual('star-on.png');
          });

          context('with :target', function () {
            beforeEach(function () {
              this.target = Helper.create('#target');
            });

            context('and :targetKeep', function () {
              context('and :targetType', function () {
                context('as *score', function () {
                  xit('shows the 0.5 float', function () {
                    // given

                    // when
                    var raty = new Raty('#el', {
                      half: true,
                      halfShow: true,
                      score: 1.5,
                      target: '#target',
                      targetKeep: true,
                      targetType: 'score',
                    }).init();

                    // then
                    expect(this.target[0].innerHTML).toEqual('1.5');
                  });
                });

                context('as *hint', function () {
                  context('with half value', function () {
                    var score = 1.5;

                    context('with only integer hints', function () {
                      var hints = ['one', 'two', 'three', 'four', 'five'];

                      xit('shows this hint as [1][0] hint', function () {
                        // given

                        // when
                        var raty = new Raty('#el', {
                          half: true,
                          halfShow: true,
                          hints: hints,
                          score: score,
                          target: '#target',
                          targetKeep: true,
                          targetType: 'hint',
                        }).init();

                        // then
                        expect(this.target[0].innerHTML).toEqual('two');
                      });
                    });

                    context('with one float hint', function () {
                      var hints = ['one', ['two'], 'three', 'four', 'five'];

                      xit('shows this hint as [1][0] hint', function () {
                        // given

                        // when
                        var raty = new Raty('#el', {
                          half: true,
                          hints: hints,
                          halfShow: true,
                          precision: false,
                          score: score,
                          target: '#target',
                          targetKeep: true,
                          targetType: 'hint',
                        }).init();

                        // then
                        expect(this.target[0].innerHTML).toEqual('two');
                      });
                    });

                    context('with two float hints', function () {
                      var hints = ['one', ['one and half', 'two'], 'three', 'four', 'five'];

                      xit('shows this hint as [1][0] hint', function () {
                        // given

                        // when
                        var raty = new Raty('#el', {
                          half: true,
                          hints: hints,
                          halfShow: true,
                          precision: false,
                          score: score,
                          target: '#target',
                          targetKeep: true,
                          targetType: 'hint',
                        }).init();

                        // then
                        expect(this.target[0].innerHTML).toEqual('one and half');
                      });
                    });
                  });

                  context('with integer value', function () {
                    var score = 2;

                    context('with only integer hints', function () {
                      var hints = ['one', 'two', 'three', 'four', 'five'];

                      xit('shows this hint as [1][1] hint', function () {
                        // given

                        // when
                        var raty = new Raty('#el', {
                          half: true,
                          hints: hints,
                          halfShow: true,
                          precision: false,
                          score: score,
                          target: '#target',
                          targetKeep: true,
                          targetType: 'hint',
                        }).init();

                        // then
                        expect(this.target[0].innerHTML).toEqual('two');
                      });
                    });

                    context('with one float hint', function () {
                      var hints = ['one', ['two'], 'three', 'four', 'five'];

                      xit('shows this hint as [1][1] hint', function () {
                        // given

                        // when
                        var raty = new Raty('#el', {
                          half: true,
                          hints: hints,
                          halfShow: true,
                          precision: false,
                          score: score,
                          target: '#target',
                          targetKeep: true,
                          targetType: 'hint',
                        }).init();

                        // then
                        expect(this.target[0].innerHTML).toEqual('two');
                      });
                    });

                    context('with two float hints', function () {
                      var hints = ['one', ['one and half', 'two'], 'three', 'four', 'five'];

                      xit('shows this hint as [1][1] hint', function () {
                        // given

                        // when
                        var raty = new Raty('#el', {
                          half: true,
                          hints: hints,
                          halfShow: true,
                          precision: false,
                          score: score,
                          target: '#target',
                          targetKeep: true,
                          targetType: 'hint',
                        }).init();

                        // then
                        expect(this.target[0].innerHTML).toEqual('two');
                      });
                    });
                  });

                  context('with float as zero value', function () {
                    var score = 2.0;

                    context('with only integer hints', function () {
                      var hints = ['one', 'two', 'three', 'four', 'five'];

                      xit('shows this hint as [1][1] hint', function () {
                        // given

                        // when
                        var raty = new Raty('#el', {
                          half: true,
                          hints: hints,
                          halfShow: true,
                          precision: false,
                          score: score,
                          target: '#target',
                          targetKeep: true,
                          targetType: 'hint',
                        }).init();

                        // then
                        expect(this.target[0].innerHTML).toEqual('two');
                      });
                    });

                    context('with one float hint', function () {
                      var hints = ['one', ['two'], 'three', 'four', 'five'];

                      xit('shows this hint as [1][1] hint', function () {
                        // given

                        // when
                        var raty = new Raty('#el', {
                          half: true,
                          hints: hints,
                          halfShow: true,
                          precision: false,
                          score: score,
                          target: '#target',
                          targetKeep: true,
                          targetType: 'hint',
                        }).init();

                        // then
                        expect(this.target[0].innerHTML).toEqual('two');
                      });
                    });

                    context('with two float hints', function () {
                      var hints = ['one', ['one and half', 'two'], 'three', 'four', 'five'];

                      xit('shows this hint as [1][1] hint', function () {
                        // given

                        // when
                        var raty = new Raty('#el', {
                          half: true,
                          hints: hints,
                          halfShow: true,
                          precision: false,
                          score: score,
                          target: '#target',
                          targetKeep: true,
                          targetType: 'hint',
                        }).init();

                        // then
                        expect(this.target[0].innerHTML).toEqual('two');
                      });
                    });
                  });
                });
              });
            });
          });
        });

        context('on #move', function () {
          beforeEach(function () {
            this.target = Helper.create('#target');
          });

          context('on 1.1', function () {
            xit('receives the half star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['1,5', '2,0']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              raty.move(1.1);

              // then
              expect(Helper.extension(raty.self.querySelector('img').src)).toEqual('star-half.png');
            });
          });

          context('on 1.2', function () {
            xit('receives half star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['1,5', '2,0']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              raty.move(1.2);

              // then
              expect(Helper.extension(raty.self.querySelector(':eq(1)').src)).toEqual('star-half.png');
            });
          });

          context('on 1.3', function () {
            xit('receives half star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['1,5', '2,0']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              raty.move(1.3);

              // then
              expect(Helper.extension(raty.self.querySelector(':eq(1)').src)).toEqual('star-half.png');
            });
          });

          context('on 1.4', function () {
            xit('receives half star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['1,5', '2,0']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              raty.move(1.4);

              // then
              expect(Helper.extension(raty.self.querySelector(':eq(1)').src)).toEqual('star-half.png');
            });
          });

          context('on 1.5', function () {
            xit('receives half star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['1,5', '2,0']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              raty.move(1.5);

              // then
              expect(Helper.extension(raty.self.querySelector(':eq(1)').src)).toEqual('star-half.png');
            });
          });

          context('on 1.6', function () {
            xit('receives the full star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['1,5', '2,0']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              raty.move(1.6);

              // then
              expect(this.target.text()).toEqual('2,0');
            });
          });

          context('on 1.7', function () {
            xit('receives the full star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['1,5', '2,0']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              raty.move(1.7);

              // then
              expect(this.target.text()).toEqual('2,0');
            });
          });

          context('on 1.8', function () {
            xit('receives the full star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['1,5', '2,0']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              raty.move(1.8);

              // then
              expect(this.target.text()).toEqual('2,0');
            });
          });

          context('on 1.9', function () {
            xit('receives the full star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['1,5', '2,0']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              raty.move(1.9);

              // then
              expect(this.target.text()).toEqual('2,0');
            });
          });

          context('on 2.0', function () {
            xit('receives the full star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['1,5', '2,0']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              raty.move(2.0);

              // then
              expect(this.target.text()).toEqual('2,0');
            });
          });

          context('on 2', function () {
            xit('receives the full star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['1,5', '2,0']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              raty.move(2);

              // then
              expect(this.target.text()).toEqual('2,0');
            });
          });
        });

        context('on mousemove', function () {
          beforeEach(function () {
            this.target = Helper.create('#target');
          });

          context('on 1.0 fraction', function () {
            xit('receives half star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['half', 'integer']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              Helper.mousemove(this.el, 1, 0);

              // then
              expect(this.target.text()).toEqual('half');
            });
          });

          context('on 1.1 fraction', function () {
            xit('receives half star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['half', 'integer']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              Helper.mousemove(this.el, 1, 1);

              // then
              expect(this.target.text()).toEqual('half');
            });
          });

          context('on 1.2 fraction', function () {
            xit('receives half star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['half', 'integer']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              Helper.mousemove(this.el, 1, 2);

              // then
              expect(this.target.text()).toEqual('half');
            });
          });

          context('on 1.3 fraction', function () {
            xit('receives half star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['half', 'integer']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              Helper.mousemove(this.el, 1, 3);

              // then
              expect(this.target.text()).toEqual('half');
            });
          });

          context('on 1.4 fraction', function () {
            xit('receives half star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['half', 'integer']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              Helper.mousemove(this.el, 1, 4);

              // then
              expect(this.target.text()).toEqual('half');
            });
          });

          context('on 1.5 fraction', function () {
            xit('receives half star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['half', 'integer']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              Helper.mousemove(this.el, 1, 5);

              // then
              expect(this.target.text()).toEqual('half');
            });
          });

          context('on 1.6 fraction', function () {
            xit('receives the full star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['half', 'integer']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              Helper.mousemove(this.el, 1, 6);

              // then
              expect(this.target.text()).toEqual('integer');
            });
          });

          context('on 1.7 fraction', function () {
            xit('receives the full star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['half', 'integer']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              Helper.mousemove(this.el, 1, 7);

              // then
              expect(this.target.text()).toEqual('integer');
            });
          });

          context('on 1.8 fraction', function () {
            xit('receives the full star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['half', 'integer']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              Helper.mousemove(this.el, 1, 8);

              // then
              expect(this.target.text()).toEqual('integer');
            });
          });

          context('on 1.9 fraction', function () {
            xit('receives the full star', function () {
              // given
              var raty = new Raty('#el', {
                half: true,
                hints: [null, ['half', 'integer']],
                target: '#target',
                targetKeep: true,
              }).init();

              // when
              Helper.mousemove(this.el, 1, 9);

              // then
              expect(this.target.text()).toEqual('integer');
            });
          });
        });
      });
    });
  });
});
