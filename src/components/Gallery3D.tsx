"use client";

import { Text, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Artwork data
const artworks = [
  {
    id: 1,
    title: "TSYP CIS Challenge",
    description: "Developed a Flutter-based solution that allows users to virtually try on clothes using their own image, providing a realistic sneak peek of how outfits would look before physically testing them.",
    technologies: ["Flutter", "Mobile Development"],
    images: ["/zen.png"],
    position: [-4, 1.5, -5.9] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    id: 2,
    title: "AeroBoard - Spacecraft Security",
    description: "Designed a security-focused spacecraft model integrating AI and 3D analysis to monitor power systems, detect external attacks, and secure network communications with hashed protocols.",
    technologies: ["Next.js", "Three.js", "AI"],
    images: ["/AeroBoard.png"],
    position: [0, 1.5, -5.9] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    id: 3,
    title: "Aii-Forsa Career Platform",
    description: "Led the development of a career facilitation platform offering job matching, CV building and review, career advice, and AI-powered interviewer.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "AI"],
    images: ["/Aii-Forsa.png"],
    position: [4, 1.5, -5.9] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    id: 4,
    title: "IEEE Certificate Generator",
    description: "Developed a platform with IEEE Tunisia Section and Orange Digital Center to generate and verify digital certificates via QR codes. Generated over 1,200 certificates.",
    technologies: ["Node.js", "Express.js", "Next.js", "MongoDB"],
    images: ["/certificate.png"],
    position: [-5.9, 1.5, -2] as [number, number, number],
    rotation: [0, Math.PI / 2, 0] as [number, number, number],
  },
  {
    id: 5,
    title: "Legal Chatbot for Regulatory Decisions",
    description: "Built an AI chatbot for 'Premiere Consulting' to answer regulatory questions and provide source-based guidance. Reduced manual consultation time.",
    technologies: ["Python", "Streamlit", "RAG", "Mistral API"],
    images: ["/Chatbot.jpg"],
    position: [-5.9, 1.5, 0] as [number, number, number],
    rotation: [0, Math.PI / 2, 0] as [number, number, number],
  },
  {
    id: 6,
    title: "Virtual Museum Platform",
    description: "Developed a virtual museum platform where users can create AI-generated artworks, post blogs, buy and sell paintings, and participate in online art fairs.",
    technologies: ["Django", "Python", "AI", "SQLITE"],
    images: ["/Museum.jpg"],
    position: [-5.9, 1.5, 2] as [number, number, number],
    rotation: [0, Math.PI / 2, 0] as [number, number, number],
  },
  {
    id: 7,
    title: "Smart Emergency System",
    description: "Implemented a real-time emergency platform with AI triage and staff coordination. Improved case prioritization by 30% and enhanced communication between medical teams.",
    technologies: ["Full Stack JS", "AI Triage", "Real-time Platform"],
    images: ["/Emergency.png"],
    position: [5.9, 1.5, -2] as [number, number, number],
    rotation: [0, -Math.PI / 2, 0] as [number, number, number],
  },
  {
    id: 8,
    title: "Work Permits Mobile Application",
    description: "Built an app for work permits and project tracking with DWS Startup. Streamlined project monitoring and reduced delays in administrative tasks.",
    technologies: ["Mobile App", "Work Permits", "Project Tracking"],
    images: ["/permits.png"],
    position: [5.9, 1.5, 0] as [number, number, number],
    rotation: [0, -Math.PI / 2, 0] as [number, number, number],
  },
  {
    id: 9,
    title: "Anime Fans Application",
    description: "Created a cross-platform app for Japanese culture and anime products. Engaged early users and provided a safe marketplace experience.",
    technologies: ["SQL", "FlutterFlow", "Firebase", "Symfony", "JavaFX"],
    images: ["/Anime.png"],
    position: [5.9, 1.5, 2] as [number, number, number],
    rotation: [0, -Math.PI / 2, 0] as [number, number, number],
  },
];

type ArtworkType = (typeof artworks)[number];

interface Props {
  onExit: () => void;
}

function ArtworkFrame({
  artwork,
  onClick,
}: {
  artwork: ArtworkType;
  onClick: () => void;
}) {
  const texture = artwork.images.length > 0 ? useTexture(artwork.images[0]) : null;

  return (
    <group
      position={artwork.position}
      rotation={artwork.rotation}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {/* Frame */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[2.4, 1.8, 0.1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* Canvas/Image */}
      {texture && (
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[2, 1.4]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      )}
      {/* Title plaque */}
      <mesh position={[0, -1.1, 0]}>
        <boxGeometry args={[1.2, 0.25, 0.05]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <Text
        position={[0, -1.1, 0.04]}
        fontSize={0.1}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {artwork.title}
      </Text>
      {/* Museum barrier/stanchion */}
    </group>
  );
}

// Museum-style stanchion barrier (velvet rope style)
function StanchionBarrier() {
  return (
    <group position={[0, -1.5, 0.8]}>
      {/* Left post */}
      <group position={[-1, 0, 0]}>
        {/* Post pole */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.04, 0.05, 0.8, 16]} />
          <meshStandardMaterial color="#C0A000" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Post base */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.18, 0.05, 16]} />
          <meshStandardMaterial color="#C0A000" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Post top ball */}
        <mesh position={[0, 0.85, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#C0A000" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      {/* Right post */}
      <group position={[1, 0, 0]}>
        {/* Post pole */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.04, 0.05, 0.8, 16]} />
          <meshStandardMaterial color="#C0A000" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Post base */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.18, 0.05, 16]} />
          <meshStandardMaterial color="#C0A000" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Post top ball */}
        <mesh position={[0, 0.85, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#C0A000" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      {/* Velvet rope (using a curved tube) */}
      <mesh position={[0, 0.7, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.025, 0.025, 2, 8]} />
        <meshStandardMaterial color="#8B0000" roughness={0.9} />
      </mesh>
      {/* Rope sag effect - middle drooping section */}
      <mesh position={[0, 0.6, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.5, 0.02, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#8B0000" roughness={0.9} />
      </mesh>
    </group>
  );
}

// Individual artwork barrier
function ArtworkBarrier({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Left post */}
      <group position={[-0.8, 0, 0]}>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.03, 0.04, 0.6, 12]} />
          <meshStandardMaterial color="#C0A000" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.14, 0.04, 12]} />
          <meshStandardMaterial color="#C0A000" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.65, 0]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color="#C0A000" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      {/* Right post */}
      <group position={[0.8, 0, 0]}>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.03, 0.04, 0.6, 12]} />
          <meshStandardMaterial color="#C0A000" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.14, 0.04, 12]} />
          <meshStandardMaterial color="#C0A000" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.65, 0]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color="#C0A000" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      {/* Velvet rope */}
      <mesh position={[0, 0.55, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 1.6, 8]} />
        <meshStandardMaterial color="#8B0000" roughness={0.9} />
      </mesh>
      {/* Rope sag effect */}
      <mesh position={[0, 0.45, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.4, 0.015, 6, 12, Math.PI]} />
        <meshStandardMaterial color="#8B0000" roughness={0.9} />
      </mesh>
    </group>
  );
}

function Door({ onClick }: { onClick: () => void }) {
  return (
    <group position={[0, 1, 4.9]} onClick={onClick}>
      {/* Door frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 2.5, 0.2]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      {/* Door panel */}
      <mesh position={[0, 0, 0.05]}>
        <boxGeometry args={[1.5, 2.2, 0.1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* Door handle */}
      <mesh position={[0.5, 0, 0.15]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* EXIT sign */}
      <Text
        position={[0, 1.5, 0.15]}
        fontSize={0.15}
        color="#00ff00"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#003300"
      >
        EXIT
      </Text>
    </group>
  );
}

function Room() {
  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[16, 12]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>
      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 4, 0]}>
        <planeGeometry args={[16, 12]} />
        <meshStandardMaterial color="#f5f5dc" />
      </mesh>
      {/* Back wall */}
      <mesh position={[0, 2, -6]}>
        <planeGeometry args={[16, 4]} />
        <meshStandardMaterial color="#e8e4d9" />
      </mesh>
      {/* Front wall */}
      <mesh position={[0, 2, 6]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[16, 4]} />
        <meshStandardMaterial color="#e8e4d9" />
      </mesh>
      {/* Left wall */}
      <mesh position={[-8, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[12, 4]} />
        <meshStandardMaterial color="#ddd9ce" />
      </mesh>
      {/* Right wall */}
      <mesh position={[8, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[12, 4]} />
        <meshStandardMaterial color="#ddd9ce" />
      </mesh>
    </>
  );
}

// Visitor figure - a simple stylized person looking at artwork
function Visitor() {
  return (
    <group position={[1.5, 0, 0]} rotation={[0, -Math.PI / 4, 0]}>
      {/* Legs */}
      <mesh position={[-0.1, 0.4, 0]}>
        <cylinderGeometry args={[0.06, 0.07, 0.8, 8]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      <mesh position={[0.1, 0.4, 0]}>
        <cylinderGeometry args={[0.06, 0.07, 0.8, 8]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      {/* Shoes */}
      <mesh position={[-0.1, 0.05, 0.05]}>
        <boxGeometry args={[0.1, 0.1, 0.2]} />
        <meshStandardMaterial color="#2d2d2d" />
      </mesh>
      <mesh position={[0.1, 0.05, 0.05]}>
        <boxGeometry args={[0.1, 0.1, 0.2]} />
        <meshStandardMaterial color="#2d2d2d" />
      </mesh>
      {/* Torso */}
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[0.2, 0.18, 0.6, 8]} />
        <meshStandardMaterial color="#3498db" />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.28, 1.05, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.05, 0.04, 0.5, 8]} />
        <meshStandardMaterial color="#3498db" />
      </mesh>
      <mesh position={[0.28, 1.05, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.05, 0.04, 0.5, 8]} />
        <meshStandardMaterial color="#3498db" />
      </mesh>
      {/* Hands */}
      <mesh position={[-0.38, 0.82, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#e0ac69" />
      </mesh>
      <mesh position={[0.38, 0.82, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#e0ac69" />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 1.45, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.1, 8]} />
        <meshStandardMaterial color="#e0ac69" />
      </mesh>
      {/* Head */}
      <mesh position={[0, 1.65, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color="#e0ac69" />
      </mesh>
      {/* Hair */}
      <mesh position={[0, 1.75, -0.02]}>
        <sphereGeometry args={[0.16, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#2c1810" />
      </mesh>
    </group>
  );
}

// First person keyboard + mouse + touch controls for walking
function FirstPersonControls({ keys }: { keys: React.MutableRefObject<{ [key: string]: boolean }> }) {
  const { camera, gl } = useThree();
  const moveSpeed = 0.08;
  const rotateSpeed = 0.03;
  const mouseSensitivity = 0.002;
  const touchSensitivity = 0.005; // Higher sensitivity for touch

  const euler = useRef(new THREE.Euler(0, 0, 0, "YXZ"));
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastTouchPos = useRef({ x: 0, y: 0 });
  const isTouching = useRef(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.code] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.code] = false;
    };

    // Mouse movement for looking around (drag-based, no pointer lock needed)
    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) { // Left click
        isDragging.current = true;
        lastMousePos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      const deltaX = e.clientX - lastMousePos.current.x;
      const deltaY = e.clientY - lastMousePos.current.y;
      lastMousePos.current = { x: e.clientX, y: e.clientY };

      euler.current.setFromQuaternion(camera.quaternion);
      euler.current.y -= deltaX * mouseSensitivity;
      euler.current.x -= deltaY * mouseSensitivity;
      
      // Clamp vertical look angle
      euler.current.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, euler.current.x));
      
      camera.quaternion.setFromEuler(euler.current);
    };

    // Touch events for mobile look around
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) { // Single touch
        isTouching.current = true;
        lastTouchPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTouching.current || e.touches.length !== 1) return;
      e.preventDefault(); // Prevent scrolling

      const touch = e.touches[0];
      const deltaX = touch.clientX - lastTouchPos.current.x;
      const deltaY = touch.clientY - lastTouchPos.current.y;
      lastTouchPos.current = { x: touch.clientX, y: touch.clientY };

      euler.current.setFromQuaternion(camera.quaternion);
      euler.current.y -= deltaX * touchSensitivity;
      euler.current.x -= deltaY * touchSensitivity;
      
      // Clamp vertical look angle
      euler.current.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, euler.current.x));
      
      camera.quaternion.setFromEuler(euler.current);
    };

    const handleTouchEnd = () => {
      isTouching.current = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    gl.domElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    gl.domElement.addEventListener("touchstart", handleTouchStart, { passive: false });
    gl.domElement.addEventListener("touchmove", handleTouchMove, { passive: false });
    gl.domElement.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      gl.domElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      gl.domElement.removeEventListener("touchstart", handleTouchStart);
      gl.domElement.removeEventListener("touchmove", handleTouchMove);
      gl.domElement.removeEventListener("touchend", handleTouchEnd);
    };
  }, [camera, gl]);

  useFrame(() => {
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    direction.y = 0;
    direction.normalize();

    const right = new THREE.Vector3();
    right.crossVectors(direction, new THREE.Vector3(0, 1, 0)).normalize();

    // Forward/backward (W/S or Up/Down arrows)
    if (keys.current["ArrowUp"] || keys.current["KeyW"]) {
      camera.position.addScaledVector(direction, moveSpeed);
    }
    if (keys.current["ArrowDown"] || keys.current["KeyS"]) {
      camera.position.addScaledVector(direction, -moveSpeed);
    }

    // Strafe left/right (A/D)
    if (keys.current["KeyA"]) {
      camera.position.addScaledVector(right, -moveSpeed);
    }
    if (keys.current["KeyD"]) {
      camera.position.addScaledVector(right, moveSpeed);
    }

    // Rotate left/right (Left/Right arrows) - still works without pointer lock
    if (keys.current["ArrowLeft"]) {
      camera.rotateY(rotateSpeed);
    }
    if (keys.current["ArrowRight"]) {
      camera.rotateY(-rotateSpeed);
    }

    // Boundary constraints - keep within room using set()
    const clampedX = Math.max(-4.5, Math.min(4.5, camera.position.x));
    const clampedZ = Math.max(-4.5, Math.min(4.5, camera.position.z));
    camera.position.set(clampedX, 1.6, clampedZ);
  });

  return null;
}

function GalleryScene({
  onArtworkClick,
  onDoorClick,
  keys,
}: {
  onArtworkClick: (artwork: ArtworkType) => void;
  onDoorClick: () => void;
  keys: React.MutableRefObject<{ [key: string]: boolean }>;
}) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[0, 3.5, 0]} intensity={1} castShadow />
      <pointLight position={[-3, 3, -3]} intensity={0.5} />
      <pointLight position={[3, 3, -3]} intensity={0.5} />

      <Room />
      
      {/* Visitor figure in the middle of the gallery */}
      <Visitor />

      {artworks.map((artwork) => (
        <ArtworkFrame
          key={artwork.id}
          artwork={artwork}
          onClick={() => onArtworkClick(artwork)}
        />
      ))}

      {/* Barriers in front of each artwork */}
      {artworks.map((artwork) => {
        // Calculate barrier position based on artwork position and rotation
        let barrierPosition: [number, number, number];
        
        if (artwork.rotation[1] === 0) {
          // Back wall - barrier in front (negative z)
          barrierPosition = [artwork.position[0], 0, artwork.position[2] + 1.2];
        } else if (artwork.rotation[1] === Math.PI / 2) {
          // Left wall - barrier to the right (positive x)
          barrierPosition = [artwork.position[0] + 1.2, 0, artwork.position[2]];
        } else {
          // Right wall - barrier to the left (negative x)
          barrierPosition = [artwork.position[0] - 1.2, 0, artwork.position[2]];
        }
        
        return (
          <ArtworkBarrier
            key={`barrier-${artwork.id}`}
            position={barrierPosition}
          />
        );
      })}

      <Door onClick={onDoorClick} />

      <FirstPersonControls keys={keys} />
    </>
  );
}

function ArtworkDetail({
  artwork,
  onClose,
}: {
  artwork: ArtworkType;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="bg-[#1a1a2e] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#00ADB5]/30">
        <div className="grid md:grid-cols-2 h-full">
          {/* Images scroller */}
          <div className="relative h-64 md:h-auto overflow-x-auto">
            <div className="flex gap-4 h-full min-w-max">
              {artwork.images.map((image, index) => (
                <div key={index} className="relative w-80 h-full flex-shrink-0">
                  <Image
                    src={image}
                    alt={`${artwork.title} - Image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Info side */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {artwork.title}
              </h2>
              <p className="text-gray-300 text-lg mb-6">{artwork.description}</p>
              <div>
                <h3 className="text-[#00ADB5] font-semibold mb-2">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {artwork.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#00ADB5]/20 text-[#00ADB5] rounded-full text-sm border border-[#00ADB5]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="mt-6 w-full py-3 bg-[#00ADB5] hover:bg-[#00ADB5]/80 text-white font-semibold rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery3D({ onExit }: Props) {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkType | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);
  const keys = useRef<{ [key: string]: boolean }>({});
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const touchEnd = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    const deltaX = touchEnd.x - touchStart.current.x;
    const deltaY = touchEnd.y - touchStart.current.y;
    const minSwipeDistance = 50;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          // Swipe right - strafe right
          keys.current['KeyD'] = true;
          setTimeout(() => keys.current['KeyD'] = false, 200);
        } else {
          // Swipe left - strafe left
          keys.current['KeyA'] = true;
          setTimeout(() => keys.current['KeyA'] = false, 200);
        }
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > minSwipeDistance) {
        if (deltaY > 0) {
          // Swipe down - move backward
          keys.current['KeyS'] = true;
          setTimeout(() => keys.current['KeyS'] = false, 200);
        } else {
          // Swipe up - move forward
          keys.current['KeyW'] = true;
          setTimeout(() => keys.current['KeyW'] = false, 200);
        }
      }
    }
    touchStart.current = null;
  };

  return (
    <div 
      className="fixed inset-0 z-40 bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
        <Suspense fallback={null}>
          <GalleryScene
            onArtworkClick={setSelectedArtwork}
            onDoorClick={onExit}
            keys={keys}
          />
        </Suspense>
      </Canvas>

      {/* Mobile movement controls */}
      {isMobile && (
        <div className="absolute bottom-20 right-4 flex flex-col gap-2">
          <button
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white text-xl font-bold"
            onTouchStart={() => keys.current['KeyW'] = true}
            onTouchEnd={() => keys.current['KeyW'] = false}
          >
            ↑
          </button>
          <div className="flex gap-2">
            <button
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white text-xl font-bold"
              onTouchStart={() => keys.current['KeyA'] = true}
              onTouchEnd={() => keys.current['KeyA'] = false}
            >
              ←
            </button>
            <button
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white text-xl font-bold"
              onTouchStart={() => keys.current['KeyS'] = true}
              onTouchEnd={() => keys.current['KeyS'] = false}
            >
              ↓
            </button>
            <button
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white text-xl font-bold"
              onTouchStart={() => keys.current['KeyD'] = true}
              onTouchEnd={() => keys.current['KeyD'] = false}
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 text-white/70 text-sm pointer-events-none bg-black/40 p-3 rounded-lg">
        <p>🖱️ Click to enable mouse look • ESC to release</p>
        <p>⬆️⬇️ or W/S: Walk forward/backward</p>
        <p>⬅️➡️: Turn left/right • A/D: Strafe</p>
        <p>🖼️ Click artwork to view details</p>
        <p>🚪 Click EXIT door to leave</p>
        {isMobile && (
          <>
            <p>👆 Swipe up/down to move forward/back</p>
            <p>👈👉 Swipe left/right to strafe</p>
            <p>👆 Drag to look around</p>
          </>
        )}
      </div>

      {selectedArtwork && (
        <ArtworkDetail
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </div>
  );
}
