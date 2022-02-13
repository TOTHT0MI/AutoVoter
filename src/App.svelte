<script lang="ts">
import { onMount } from "svelte";

	import browser from "webextension-polyfill";
	let ign: string;
	let enabled: boolean = false;

	onMount(() => {
		browser.storage.local.get(["av-ign", "av-enabled"]).then((data) => {
			ign = data['av-ign'];

			enabled = data['av-enabled'];
			if (enabled === undefined) {
				enabled = true;
				browser.storage.local.set({ 'av-enabled': enabled});
			}
		});
	});

	function changeIgn() {
		browser.storage.local.set({'av-ign': ign});
	}

	function toggleEnabled() {
		enabled = !enabled;
		browser.storage.local.set({ 'av-enabled': enabled});
	}

</script>

<main class="main">
	<div class="row middle-xs" style="margin-bottom: 3rem;">
		<div class="col-xs-8">
			<div class="top">
				<h2 style="margin-left: 5px;">AutoVoter</h2>
			</div>
		</div>
		<div class="col-xs-4">
			<div class="switch-holder" style="margin-top: -1rem; float: right; margin-right: 1rem;">
				<label class="switch">
					<input type="checkbox" on:click={toggleEnabled} bind:checked={enabled}>
					<span class="slider round"></span>
				  </label>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-2"></div>
		<div class="col-xs-8" style="text-align: center;">
			<label for="ign">IGN:</label>
			<input id="ign" type="text" bind:value={ign} />
			<button style="margin-top: 10px;" on:click={changeIgn}>Change IGN</button>
		</div>
		<div class="col-xs-2"></div>
	</div>

	<div class="row">
		<div class="col-xs-1"></div>
		<div class="col-xs-8" style="text-align: left;">
			<h3>Prefrences (Soon...)</h3>
			<label class="pure-material-checkbox" title="Close the page automatically after a successful vote.">
				<input type="checkbox" disabled>
				<span>Auto-close page</span>
			</label>

			<label class="pure-material-checkbox" title="Click CAPTCHA automatically (You will still need to complete it, there's no AI magic here).">
				<input type="checkbox" disabled>
				<span>Auto CAPTCHA</span>
			</label>

			<label class="pure-material-checkbox" title="The extension will press the submit/vote button for you automatically.">
				<input type="checkbox" disabled>
				<span>Auto submit</span>
			</label>
		</div>
		<div class="col-xs-2"></div>
	</div>
	<div class="footer">
		<div class="row">
			<div class="col-xs-2"></div>
			<div class="col-xs-8" style="text-align: center;">
				<p>Made by TOTHTOMI with &hearts;</p>
			</div>
			<div class="col-xs-2"></div>
		</div>
	</div>
</main>

<style>
	.row {
		margin-top: 1.5rem;
	}

	.top {
		position: absolute;

		top: 0px;
		left: 0px;

		width: 100%;
		height: 40px;
		background-color: #81A1C1;
	}

	.top h2 {
		margin-top: .5rem;
	}

	.main {
		position: absolute;
		top: 0px;
		left: 0px;

		width: 300px;
		height: 400px;
		max-width: 300px;
		max-height: 500px;

	}
</style>