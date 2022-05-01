<template>
    <div>
        <h1>Log in Here</h1>
        <form v-on:submit.prevent="onSubmit()">
            <fieldset class="form-group">
                <input class ="form-control form-control-lg"
                type="text"
                placeholder="Email" />
            </fieldset>
            <fieldset class="form-group">
                <input class ="form-control form-control-lg"
                type="password"
                placeholder="Password" />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
                Sign In
            ></button>
        </form>
    </div>
</template>