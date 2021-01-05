(this.webpackJsonp02 = this.webpackJsonp02 || []).push([
  [0], {
    15: function (t, e, n) {},
    16: function (t, e, n) {},
    17: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n(0),
        s = n(1),
        c = n(8),
        a = n.n(c),
        o = (n(15), n(2)),
        r = n(3),
        d = n(5),
        l = n(4),
        h = function (t) {
          Object(d.a)(n, t);
          var e = Object(l.a)(n);

          function n() {
            return Object(o.a)(this, n), e.apply(this, arguments)
          }
          return Object(r.a)(n, [{
            key: "render",
            value: function () {
              console.log("TOC render");
              for (var t = [], e = this.props.data, n = 0; n < e.length;) t.push(Object(i.jsx)("li", {
                children: Object(i.jsx)("a", {
                  href: "/content/" + e[n].id,
                  "data-id": e[n].id,
                  onClick: function (t) {
                    t.preventDefault(), this.props.onChangePage(t.target.dataset.id)
                  }.bind(this),
                  children: e[n].title
                })
              }, e[n].id)), n += 1;
              return Object(i.jsx)("nav", {
                children: Object(i.jsx)("ul", {
                  children: t
                })
              })
            }
          }]), n
        }(s.Component),
        u = function (t) {
          Object(d.a)(n, t);
          var e = Object(l.a)(n);

          function n() {
            return Object(o.a)(this, n), e.apply(this, arguments)
          }
          return Object(r.a)(n, [{
            key: "render",
            value: function () {
              return console.log("Content render"), Object(i.jsxs)("article", {
                children: [Object(i.jsx)("h2", {
                  children: this.props.title
                }), this.props.desc]
              })
            }
          }]), n
        }(s.Component),
        j = function (t) {
          Object(d.a)(n, t);
          var e = Object(l.a)(n);

          function n() {
            return Object(o.a)(this, n), e.apply(this, arguments)
          }
          return Object(r.a)(n, [{
            key: "render",
            value: function () {
              return console.log("Content render"), Object(i.jsxs)("article", {
                children: [Object(i.jsx)("h2", {
                  children: "Create"
                }), Object(i.jsxs)("form", {
                  action: "/create_process",
                  method: "post",
                  onSubmit: function (t) {
                    t.preventDefault(), this.props.onSubmit(t.target.title.value, t.target.desc.value)
                  }.bind(this),
                  children: [Object(i.jsx)("p", {
                    children: Object(i.jsx)("input", {
                      type: "text",
                      name: "title",
                      placeholder: "title"
                    })
                  }), Object(i.jsx)("p", {
                    children: Object(i.jsx)("textarea", {
                      name: "desc",
                      placeholder: "description"
                    })
                  }), Object(i.jsx)("p", {
                    children: Object(i.jsx)("input", {
                      type: "submit"
                    })
                  })]
                })]
              })
            }
          }]), n
        }(s.Component),
        b = n(9),
        p = n(6),
        O = function (t) {
          Object(d.a)(n, t);
          var e = Object(l.a)(n);

          function n(t) {
            var i;
            return Object(o.a)(this, n), (i = e.call(this, t)).state = {
              id: i.props.data.id,
              title: i.props.data.title,
              desc: i.props.data.desc
            }, i.inputFormHandler = i.inputFormHandler.bind(Object(p.a)(i)), i
          }
          return Object(r.a)(n, [{
            key: "inputFormHandler",
            value: function (t) {
              this.setState(Object(b.a)({}, t.target.name, t.target.value))
            }
          }, {
            key: "render",
            value: function () {
              return console.log(this.props.data), console.log("UpdateContent render"), Object(i.jsxs)("article", {
                children: [Object(i.jsx)("h2", {
                  children: "Update"
                }), Object(i.jsxs)("form", {
                  action: "/create_process",
                  method: "post",
                  onSubmit: function (t) {
                    t.preventDefault(), this.props.onSubmit(this.state.id, this.state.title, this.state.desc)
                  }.bind(this),
                  children: [Object(i.jsx)("input", {
                    type: "hidden",
                    name: "id",
                    value: this.state.id
                  }), Object(i.jsx)("p", {
                    children: Object(i.jsx)("input", {
                      type: "text",
                      name: "title",
                      placeholder: "title",
                      value: this.state.title,
                      onChange: this.inputFormHandler
                    })
                  }), Object(i.jsx)("p", {
                    children: Object(i.jsx)("textarea", {
                      onChange: this.inputFormHandler,
                      name: "desc",
                      placeholder: "description",
                      value: this.state.desc
                    })
                  }), Object(i.jsx)("p", {
                    children: Object(i.jsx)("input", {
                      type: "submit"
                    })
                  })]
                })]
              })
            }
          }]), n
        }(s.Component),
        f = function (t) {
          Object(d.a)(n, t);
          var e = Object(l.a)(n);

          function n() {
            return Object(o.a)(this, n), e.apply(this, arguments)
          }
          return Object(r.a)(n, [{
            key: "render",
            value: function () {
              return console.log("Subject render"), Object(i.jsxs)("header", {
                children: [Object(i.jsx)("h1", {
                  children: Object(i.jsx)("a", {
                    href: "/",
                    onClick: function (t) {
                      t.preventDefault(), this.props.onChangePage()
                    }.bind(this),
                    children: this.props.title
                  })
                }), this.props.sub]
              })
            }
          }]), n
        }(s.Component),
        m = function (t) {
          Object(d.a)(n, t);
          var e = Object(l.a)(n);

          function n() {
            return Object(o.a)(this, n), e.apply(this, arguments)
          }
          return Object(r.a)(n, [{
            key: "render",
            value: function () {
              return console.log("Subject render"), Object(i.jsxs)("ul", {
                children: [Object(i.jsx)("li", {
                  children: Object(i.jsx)("a", {
                    href: "/create",
                    onClick: function (t) {
                      t.preventDefault(), this.props.onChangeMode("create")
                    }.bind(this),
                    children: "create"
                  })
                }), Object(i.jsx)("li", {
                  children: Object(i.jsx)("a", {
                    href: "/update",
                    onClick: function (t) {
                      t.preventDefault(), this.props.onChangeMode("update")
                    }.bind(this),
                    children: "update"
                  })
                }), Object(i.jsx)("li", {
                  children: Object(i.jsx)("input", {
                    onClick: function (t) {
                      t.preventDefault(), this.props.onChangeMode("delete")
                    }.bind(this),
                    type: "button",
                    value: "delete"
                  })
                })]
              })
            }
          }]), n
        }(s.Component),
        x = (n(16), function (t) {
          Object(d.a)(n, t);
          var e = Object(l.a)(n);

          function n(t) {
            var i;
            return Object(o.a)(this, n), (i = e.call(this, t)).max_content_id = void 0, i.max_content_id = 3, i.state = {
              mode: "welcome",
              selected_content_id: 2,
              subject: {
                title: "WEB",
                sub: "World Wide Web!"
              },
              welcome: {
                title: "Welcome",
                desc: "Hello, React!!"
              },
              contents: [{
                id: 1,
                title: "HTML",
                desc: "HTML is for information"
              }, {
                id: 2,
                title: "CSS",
                desc: "CSS is for design"
              }, {
                id: 3,
                title: "JavaScript",
                desc: "JavaScript is for interactive"
              }]
            }, i
          }
          return Object(r.a)(n, [{
            key: "getReadContent",
            value: function () {
              for (var t = 0; t < this.state.contents.length;) {
                var e = this.state.contents[t];
                if (e.id === this.state.selected_content_id) return e;
                t += 1
              }
            }
          }, {
            key: "getContent",
            value: function () {
              var t, e, n = null;
              if ("welcome" === this.state.mode) t = this.state.welcome.title, e = this.state.welcome.desc, n = Object(i.jsx)(u, {
                title: t,
                desc: e
              });
              else if ("read" === this.state.mode) {
                var s = this.getReadContent();
                n = Object(i.jsx)(u, {
                  title: s.title,
                  desc: s.desc
                })
              } else "create" === this.state.mode ? n = Object(i.jsx)(j, {
                onSubmit: function (t, e) {
                  this.max_content_id = this.max_content_id + 1;
                  var n = Array.from(this.state.contents);
                  n.push({
                    id: this.max_content_id,
                    title: t,
                    desc: e
                  }), this.setState({
                    contents: n,
                    mode: "read",
                    selected_content_id: this.max_content_id
                  })
                }.bind(this)
              }) : "update" === this.state.mode && (s = this.getReadContent(), n = Object(i.jsx)(O, {
                data: s,
                onSubmit: function (t, e, n) {
                  for (var i = Array.from(this.state.contents), s = 0; s < i.length;) {
                    if (i[s].id === t) {
                      i[s] = {
                        id: t,
                        title: e,
                        desc: n
                      };
                      break
                    }
                    s += 1
                  }
                  this.setState({
                    contents: i,
                    mode: "read"
                  })
                }.bind(this)
              }));
              return n
            }
          }, {
            key: "render",
            value: function () {
              return console.log("App render"), Object(i.jsxs)("div", {
                className: "App",
                children: [Object(i.jsx)(f, {
                  title: this.state.subject.title,
                  sub: this.state.subject.sub,
                  onChangePage: function () {
                    this.setState({
                      mode: "welcome"
                    })
                  }.bind(this)
                }), Object(i.jsx)(h, {
                  onChangePage: function (t) {
                    this.setState({
                      mode: "read",
                      selected_content_id: Number(t)
                    })
                  }.bind(this),
                  data: this.state.contents
                }), Object(i.jsx)(m, {
                  onChangeMode: function (t) {
                    if ("delete" === t) {
                      if (window.confirm("really?")) {
                        for (var e = Array.from(this.state.contents), n = 0; n < e.length;) {
                          if (e[n].id === this.state.selected_content_id) {
                            e.splice(n, 1);
                            break
                          }
                          n += 1
                        }
                        this.setState({
                          mode: "welcome",
                          contents: e
                        }), alert("deleted!")
                      }
                    } else this.setState({
                      mode: t
                    })
                  }.bind(this)
                }), this.getContent()]
              })
            }
          }]), n
        }(s.Component));
      Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
      a.a.render(Object(i.jsx)(x, {}), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (t) {
        t.unregister()
      })).catch((function (t) {
        console.error(t.message)
      }))
    }
  },
  [
    [17, 1, 2]
  ]
]);
//# sourceMappingURL=main.c9951531.chunk.js.map