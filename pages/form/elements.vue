<script>
/**
 * Elements component
 */
export default {
    head() {
        return {
            title: `${this.title} | Nuxtjs Responsive Bootstrap 4 Admin Dashboard`
        };
    },
    data() {
        return {
            title: "Basic Elements",
            items: [{
                    text: "Forms",
                    href: "/"
                },
                {
                    text: "Basic Elements",
                    active: true
                }
            ],
            checked: true,
            smchecked: true,
            lgchecked: true,
            selectedToogle: "A",
            selectedDefault: "a",
            rightcheck: "accepted",
            status: "accepted"
        };
    },
    middleware: "authentication",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Textual inputs</h4>
                    <p class="card-title-desc">
                        Here are examples of
                        <code>.form-control</code> applied to each textual HTML5
                        <code>&lt;input&gt;</code>
                        <code>type</code>.
                    </p>

                    <div class="row">
                        <div class="col-12">
                            <form class="form-horizontal" role="form">
                                <b-form-group id="example text" label-cols-sm="2" label-cols-lg="2" label="Text" label-for="text">
                                    <b-form-input for="text" value="Artisanal kale"></b-form-input>
                                </b-form-group>

                                <b-form-group id="example-search" label-cols-sm="2" label-cols-lg="2" label="Search" label-for="search">
                                    <b-form-input id="search" value="How do I shoot web" type="search" name="search"></b-form-input>
                                </b-form-group>

                                <b-form-group id="example-email" label-cols-sm="2" label-cols-lg="2" label="Email" label-for="email">
                                    <b-form-input id="email" value="bootstrap@example.com"></b-form-input>
                                </b-form-group>

                                <b-form-group id="example-url" label-cols-sm="2" label-cols-lg="2" label="URL" label-for="url">
                                    <b-form-input id="url" value="https://getbootstrap.com" type="url" name="url"></b-form-input>
                                </b-form-group>

                                <b-form-group id="example-tel" label-cols-sm="2" label-cols-lg="2" label="Telephone" label-for="tele">
                                    <b-form-input id="tele" value="1-(555)-555-5555" type="tel" name="tel"></b-form-input>
                                </b-form-group>

                                <b-form-group id="example-password" label-cols-sm="2" label-cols-lg="2" label="Password" label-for="pwd">
                                    <b-form-input id="pwd" type="password" value="password"></b-form-input>
                                </b-form-group>

                                <b-form-group id="example-number" label-cols-sm="2" label-cols-lg="2" label="Number" label-for="number">
                                    <b-form-input id="number" value="42" type="number" name="number"></b-form-input>
                                </b-form-group>

                                <b-form-group id="example-date-time" label-cols-sm="2" label-cols-lg="2" label="Date and time" label-for="date-time">
                                    <b-form-input id="date-time" value="2019-08-19T13:45:00" type="datetime-local"></b-form-input>
                                </b-form-group>

                                <b-form-group id="example-date" label-cols-sm="2" label-cols-lg="2" label="Date" label-for="date">
                                    <b-form-input id="date" value="2019-08-19" type="date"></b-form-input>
                                </b-form-group>

                                <b-form-group id="example-month" label-cols-sm="2" label-cols-lg="2" label="Month" label-for="month">
                                    <b-form-input id="month" value="2019-08" type="month"></b-form-input>
                                </b-form-group>

                                <b-form-group id="example-week" label-cols-sm="2" label-cols-lg="2" label="Week" label-for="week">
                                    <b-form-input id="week" value="2019-W33" type="week"></b-form-input>
                                </b-form-group>

                                <b-form-group id="example-time" label-cols-sm="2" label-cols-lg="2" label="Time" label-for="time">
                                    <b-form-input id="time" value="13:45:00" type="time"></b-form-input>
                                </b-form-group>

                                <b-form-group id="example-color" label-cols-sm="2" label-cols-lg="2" label="Color" label-for="color">
                                    <b-form-input id="color" type="color" name="color" value="#556ee6"></b-form-input>
                                </b-form-group>

                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label">Select</label>
                                    <div class="col-md-10">
                                        <select class="form-control">
                                            <option>Select</option>
                                            <option>Large select</option>
                                            <option>Small select</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    <label class="col-md-2 col-form-label">Custom Select</label>
                                    <div class="col-md-10">
                                        <select class="custom-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    <label for="formControlRange" class="col-md-2 col-form-label">Range Inputs</label>
                                    <div class="col-md-10 align-self-center">
                                        <input type="range" class="form-control-range" id="formControlRange" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- end row -->
                </div>
            </div>
            <!-- end card -->
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Form layouts</h4>

                    <div class="row">
                        <div class="col-lg-5">
                            <div class="mt-4">
                                <h5 class="font-size-14 mb-4">
                                    <i class="mdi mdi-arrow-right text-primary mr-1"></i> Form
                                    groups
                                </h5>
                                <form>
                                    <b-form-group label="First name" label-for="formrow-firstname-input">
                                        <b-form-input type="text" id="formrow-firstname-input"></b-form-input>
                                    </b-form-group>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <b-form-group label="Email" label-for="formrow-email-input">
                                                <b-form-input id="formrow-email-input" type="email"></b-form-input>
                                            </b-form-group>
                                        </div>
                                        <div class="col-md-6">
                                            <b-form-group label="Password" label-for="formrow-password-input">
                                                <b-form-input id="formrow-password-input" type="password"></b-form-input>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <b-form-group class="row">
                                        <div class="col-sm-9">
                                            <b-form-checkbox value="me">Check me out</b-form-checkbox>
                                        </div>
                                    </b-form-group>
                                    <div class="mt-4">
                                        <b-button type="submit" variant="primary">Submit</b-button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 ml-lg-auto">
                            <div class="mt-5 mt-lg-4">
                                <h5 class="font-size-14 mb-4">
                                    <i class="mdi mdi-arrow-right text-primary mr-1"></i>
                                    Horizontal form
                                </h5>

                                <form>
                                    <div class="form-group row mb-4">
                                        <label for="horizontal-firstname-input" class="col-sm-3 col-form-label">First name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="horizontal-firstname-input" />
                                        </div>
                                    </div>
                                    <div class="form-group row mb-4">
                                        <label for="horizontal-email-input" class="col-sm-3 col-form-label">Email</label>
                                        <div class="col-sm-9">
                                            <input type="email" class="form-control" id="horizontal-email-input" />
                                        </div>
                                    </div>
                                    <div class="form-group row mb-4">
                                        <label for="horizontal-password-input" class="col-sm-3 col-form-label">Password</label>
                                        <div class="col-sm-9">
                                            <input type="password" class="form-control" id="horizontal-password-input" />
                                        </div>
                                    </div>

                                    <div class="form-group row justify-content-end">
                                        <div class="col-sm-9">
                                            <div class="custom-control custom-checkbox mb-4">
                                                <input type="checkbox" class="custom-control-input" id="horizontal-customCheck" />
                                                <label class="custom-control-label" for="horizontal-customCheck">Remember me</label>
                                            </div>

                                            <div>
                                                <button type="submit" class="btn btn-primary w-md">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <h5 class="font-size-14 mb-4">
                            <i class="mdi mdi-arrow-right text-primary mr-1"></i> Inline
                            forms layout
                        </h5>
                        <b-form inline>
                            <label class="sr-only" for="inline-form-input-name">Name</label>
                            <b-input id="inline-form-input-name" class="mb-2 mr-sm-3" placeholder="Enter Name"></b-input>

                            <label class="sr-only" for="inline-form-input-email">Email</label>
                            <b-input-group prepend="@" class="mb-2 mr-sm-3">
                                <b-input id="inline-form-input-email" placeholder="Enter Email"></b-input>
                            </b-input-group>

                            <b-form-checkbox class="mb-2 mr-sm-3">Remember me</b-form-checkbox>

                            <b-button variant="primary">Submit</b-button>
                        </b-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Form Layout -->

    <!-- Start Form Sizing -->
    <div class="row">
        <div class="col-lg-12">
            <div class="card mb-5">
                <div class="card-body">
                    <h4 class="card-title">Sizing</h4>
                    <p class="card-title-desc">
                        Set heights using size like
                        <code>lg</code> and <code>sm</code>.
                    </p>

                    <form>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="default-input">Default input</label>
                                    <b-form-input id="default-input" placeholder="Default input"></b-form-input>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group mt-3">
                                    <label for="form-sm-input">Form Small input</label>
                                    <b-form-input id="form-sm-input" size="sm" placeholder=".form-control-sm"></b-form-input>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group mt-3 mb-0">
                                    <label for="form-lg-input">Form Large input</label>
                                    <b-form-input id="form-lg-input" size="lg" placeholder=".form-control-lg"></b-form-input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- End Form Sizing -->

    <div class="row">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Checkboxes</h4>

                    <div class="row">
                        <div class="col-md-5">
                            <div class="mt-4">
                                <h5 class="font-size-14 mb-4">
                                    <i class="mdi mdi-arrow-right text-primary mr-1"></i>
                                    Default Checkboxes
                                </h5>
                                <b-form-checkbox value="accepted" unchecked-value="not_accepted" class="mb-3" checked plain>Default checkbox</b-form-checkbox>

                                <b-form-checkbox value="accepted" unchecked-value="not_accepted" class="form-check-right" v-model="rightcheck" plain>Default checkbox Right</b-form-checkbox>
                            </div>
                        </div>
                        <div class="col-md-6 ml-auto">
                            <div class="mt-4">
                                <h5 class="font-size-14 mb-4">
                                    <i class="mdi mdi-arrow-right text-primary mr-1"></i> Custom
                                    Checkboxes
                                </h5>

                                <b-form-checkbox v-model="status" value="accepted" unchecked-value="not_accepted" class="custom-checkbox mb-3" checked>Custom checkbox Right</b-form-checkbox>
                                <b-form-checkbox value="accepted" unchecked-value="not_accepted" class="custom-checkbox custom-control-right" checked>Custom checkbox Right</b-form-checkbox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Radios</h4>

                    <div class="row">
                        <div class="col-md-5">
                            <div class="mt-4">
                                <h5 class="font-size-14 mb-4"><i class="mdi mdi-arrow-right text-primary mr-1"></i>Default Radios</h5>
                                <b-form-radio v-model="selectedDefault" class="mb-3" value="a" plain>Default radio</b-form-radio>
                                <b-form-radio v-model="selectedDefault" class="form-check-right" value="b" plain>Default radio Right</b-form-radio>
                            </div>
                        </div>

                        <div class="col-md-6 ml-auto">
                            <div class="mt-4">
                                <h5 class="font-size-14 mb-4"><i class="mdi mdi-arrow-right text-primary mr-1"></i>Custom Radios</h5>
                                <b-form-radio v-model="selectedToogle" class="custom-radio mb-3" value="A">Toggle this custom radio</b-form-radio>
                                <b-form-radio v-model="selectedToogle" class="custom-control-right" value="B">Or toggle this Right custom radio</b-form-radio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Switches</h4>
                    <p class="card-title-desc">
                        A switch has the markup of a custom checkbox but uses the
                        <code>.custom-switch</code> class to render a toggle switch.
                        Switches also support the <code>disabled</code> attribute.
                    </p>

                    <div class="row">
                        <div class="col-lg-6">
                            <div>
                                <h5 class="font-size-14 mb-3">Switch examples</h5>
                                <b-form-checkbox v-model="checked" switch class="mb-1">
                                    <label>Toggle this switch element</label>
                                </b-form-checkbox>
                                <b-form-checkbox switch disabled>
                                    <label>Disabled switch element</label>
                                </b-form-checkbox>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <h5 class="font-size-14 mb-3">Switch sizes</h5>
                            <b-form-checkbox switch size="sm" class="mb-3" v-model="smchecked">Small Size Switch</b-form-checkbox>
                            <b-form-checkbox switch class="mb-3">Medium Size Switch</b-form-checkbox>
                            <b-form-checkbox switch size="lg" v-model="lgchecked">Large Size Switch</b-form-checkbox>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">File browser</h4>
                    <p class="card-title-desc">
                        The file input is the most gnarly of the bunch and requires
                        additional JavaScript if you’d like to hook them up with
                        functional
                        <em>Choose file…</em> and selected file name text.
                    </p>
                    <div class="custom-file">
                        <input id="customFile" type="file" class="custom-file-input" />
                        <label class="custom-file-label" for="customFile">Choose file</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
