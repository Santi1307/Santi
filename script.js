// Generate a deterministic hash for the input text
function hashCode(str) {
    return Array.from(str)
        .reduce((acc, char) => acc + char.charCodeAt(0), 0) % 99999 + 1;
}

// Generate a random 5-character alphanumeric string based on the hash
function generateRandomString(hash) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
        result += chars[(hash + i) % chars.length];
    }
    return result;
}

// Generate a location code based on input text
function generateLocationCode() {
    let inputText = document.getElementById("inputText").value.trim();
    if (!inputText) return alert("Please enter some text!");

    let hash = hashCode(inputText);
    let randomString = generateRandomString(hash);
    let locationCode = `${hash.toString().padStart(5, "0")}_${randomString}`;

    // Store the mapping
    let vaultData = JSON.parse(localStorage.getItem("vaultData")) || {};
    vaultData[locationCode] = inputText;
    localStorage.setItem("vaultData", JSON.stringify(vaultData));

    document.getElementById("locationCode").innerText = `Your Code: ${locationCode}`;
}

// Generate long Linux-like fake loading logs
function generateFakeLoadingLogs(callback) {
    const logArea = document.getElementById("loadingLogs");
    logArea.innerHTML = ""; // Clear previous logs
    logArea.style.display = "block";

    const logTemplates = [
        "[ OK ] Mounted /mnt/data_volume",
        "[ INFO ] Kernel module 'vault-encoder' loaded",
        "[ OK ] Establishing Secure Enclave Communication",
        "[ OK ] Checking file system integrity",
        "[ INFO ] Running blockchain node validation...",
        "[ OK ] AES-256 encryption layer initialized",
        "[ INFO ] Performing deep packet inspection...",
        "[ OK ] SHA-512 checksum verified",
        "[ INFO ] Running entropy test on random seed generator...",
        "[ INFO ] Virtual memory pool optimized for secure storage",
        "[ OK ] Vault session keys successfully regenerated",
        "[ OK ] Loading virtualized execution environment...",
        "[ INFO ] Secure memory cleanup scheduled...",
        "[ OK ] Trusted Platform Module (TPM) self-test passed",
        "[ WARN ] Network anomaly detected, rerouting traffic...",
        "[ INFO ] Initializing neural network...",
        "[ OK ] AI learning module active",
        "[ WARN ] Unauthorized access attempt detected...",
        "[ INFO ] Generating zero-knowledge proof...",
        "[ OK ] 4096-bit RSA signature validated",
        "[ INFO ] ECC curve P-521 key exchange initiated...",
        "[ INFO ] Self-destruct failsafe disabled...",
        "[ OK ] Loading next-gen quantum-resistant cipher suite...",
        "[ INFO ] Running AI-driven anomaly detection...",
        "[ OK ] Memory buffer optimization complete",
        "[ INFO ] Blockchain sync in progress...",
        "[ OK ] Cryptographic key rotation successful",
        "[ INFO ] Neural network weight adjustments applied...",
        "[ WARN ] Heuristic analysis found anomalies, isolating...",
        "[ OK ] Enclave integrity verified.",
        "[ INFO ] Decrypting payload using homomorphic encryption...",
        "[ OK ] Lattice-based cryptographic validation passed.",
        "[ INFO ] AI entropy generation check successful.",
        "[ WARN ] Latency detected in cryptographic handshake...",
        "[ OK ] AI-generated seed verified.",
        "[ INFO ] Secure enclave handshake established.",
        "[ OK ] Secure memory mapped to virtual environment.",
        "[ WARN ] Out-of-band network packet detected.",
        "[ INFO ] Predictive AI models updated successfully...",
        "[ OK ] Data fragmentation auto-repaired.",
        "[ INFO ] Running trusted execution environment verification...",
        "[ OK ] Stealth encryption mode engaged.",
        "[ WARN ] Suspicious pattern detected in process tree...",
        "[ INFO ] Anti-replay protection activated.",
        "[ OK ] Root-of-trust verification complete.",
        "[ INFO ] Running advanced post-quantum cryptography tests...",
        "[ OK ] ChaCha20-Poly1305 encryption enabled.",
        "[ INFO ] Memory leak mitigation process running...",
        "[ OK ] Data compression optimized with LZ77 algorithm.",
        "[ INFO ] Running AI-assisted fraud detection...",
        "[ OK ] Vault lock activated at /dev/sda1.",
        "[ INFO ] Predictive AI breach detection running...",
        "[ WARN ] Possible tampering detected, investigating...",
        "[ OK ] Session authentication verified via multi-factor.",
        "[ INFO ] Running secure enclave signature verification...",
        "[ OK ] Biometric authentication successful.",
        "[ WARN ] Unauthorized access attempt blocked.",
        "[ OK ] Machine learning model retrained successfully.",
        "[ INFO ] AI-driven anomaly detection in progress...",
        "[ OK ] CPU microarchitecture threat scan complete.",
        "[ WARN ] Minor kernel instability detected, self-repairing...",
        "[ OK ] Hardware-level encryption enabled for memory regions.",
        "[ INFO ] Randomness source entropy analysis successful.",
        "[ WARN ] Sandbox escape attempt detected, neutralizing...",
        "[ INFO ] Post-quantum cryptography check complete.",
        "[ OK ] Secure shell session established.",
        "[ INFO ] AI self-diagnostic scan running...",
        "[ OK ] System entropy levels within expected range.",
        "[ INFO ] Injecting decoy vulnerabilities for honeypot traps...",
        "[ OK ] Secure erase function verified on /dev/null.",
        "[ INFO ] Running speculative execution countermeasures...",
        "[ OK ] Secure execution environment validated.",
        "[ WARN ] High CPU usage detected during cryptographic operations.",
        "[ OK ] Encryption key management system operational.",
        "[ INFO ] Advanced persistent threat monitoring enabled.",
        "[ WARN ] External SSH probe detected, firewall response triggered.",
        "[ INFO ] Machine learning dataset retraining in progress...",
        "[ OK ] Private blockchain node synchronization successful.",
        "[ INFO ] AI predictive model updated for zero-day threats.",
        "[ OK ] Cryptographic resilience test passed.",
        "[ INFO ] AI-driven log analysis complete.",
        "[ OK ] Secure bootloader integrity verified.",
        "[ INFO ] Kernel space memory isolation active.",
        "[ WARN ] AI detected anomaly in user behavior, alerting admin...",
        "[ OK ] Digital forensics module running live analysis...",
        "[ INFO ] Secure multi-party computation (SMPC) initiated...",
    ];

    let index = 0;
    function showNextLog() {
        if (index < 200) { // Generate 200+ log entries dynamically
            let logLine = document.createElement("p");
            let randomLog = logTemplates[Math.floor(Math.random() * logTemplates.length)];
            logLine.innerText = `> ${randomLog}`;
            logArea.appendChild(logLine);
            logArea.scrollTop = logArea.scrollHeight; // Auto-scroll effect
            index++;
            setTimeout(showNextLog, Math.random() * 20 + 10); // Ultra-fast scrolling
        } else {
            setTimeout(callback, 2000);
        }
    }

    showNextLog();
}

// Retrieve stored text with realistic loading animation
function retrieveText() {
    let decodeInput = document.getElementById("decodeInput").value.trim();
    let vaultData = JSON.parse(localStorage.getItem("vaultData")) || {};
    let resultArea = document.getElementById("retrievedText");

    resultArea.style.display = "none";
    document.getElementById("loadingLogs").style.display = "block";

    generateFakeLoadingLogs(() => {
        let storedText = vaultData[decodeInput] || "❌ Data Not Found!";
        resultArea.innerText = storedText;
        document.getElementById("loadingLogs").style.display = "none";
        resultArea.style.display = "block";
    });
}