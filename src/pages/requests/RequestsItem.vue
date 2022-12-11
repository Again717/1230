<template>
    <li>
        <div>
            <h3>{{id}}</h3>
            <p>{{email}}</p>
            <p>{{message}}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'email', 'message']
}
</script>
