uniform float time;
uniform vec3 color;

varying vec2 vUv;

void main() {
	gl_FragColor.rgba = vec4(vUv, 1.0 ,1.0);
}